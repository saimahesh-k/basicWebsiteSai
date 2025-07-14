// File: src/pages/TopicPage.tsx

import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  CircularProgress,
} from "@mui/material";

interface Topic {
  id: number;
  name: string;
  slug: string;
}

interface Article {
  id: number;
  title: string;
  content: string;
  reference_url: string;
  headline_image: string;
}

const TopicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ksaimahesh.in/get_topics.php")
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`https://ksaimahesh.in/get_articles_by_slug.php?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        setArticles(data.articles || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        News Articles
      </Typography>

      <Box sx={{ mb: 4, textAlign: "center" }}>
        {topics.map((topic) => (
          <Chip
            key={topic.slug}
            label={topic.name}
            onClick={() => navigate(`/news/${topic.slug}`)}
            color={topic.slug === slug ? "primary" : "default"}
            sx={{ m: 0.5 }}
            clickable
          />
        ))}
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={3}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <CardActionArea
                onClick={() => navigate(`/news/${slug}/${article.id}`)}
              >
                <Card sx={{ height: "100%", borderRadius: 3, boxShadow: 3 }}>
                  {article.headline_image && (
                    <Box
                      component="img"
                      src={article.headline_image}
                      alt={article.title}
                      sx={{
                        width: "100%",
                        height: 180,
                        objectFit: "cover",
                        borderTopLeftRadius: 12,
                        borderTopRightRadius: 12,
                      }}
                    />
                  )}
                  <CardContent>
                    <Typography variant="h6" gutterBottom>
                      {article.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {article.content.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TopicPage;
