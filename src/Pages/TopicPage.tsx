// File: src/pages/TopicPage.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  Chip,
  CircularProgress,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";

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

const StyledCard = styled(Card)(({ theme }) => ({
  height: "100%",
  borderRadius: 16,
  boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
  "&:hover": {
    transform: "translateY(-4px)",
    boxShadow: "0 12px 24px rgba(0, 0, 0, 0.15)",
  },
}));

const TopicPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
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
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: "1200px", mx: "auto" }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        {topics.find((t) => t.slug === slug)?.name || "News Articles"}
      </Typography>

      <Box
        sx={{
          mb: 4,
          overflowX: "auto",
          whiteSpace: "nowrap",
          pb: 1,
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        <Stack direction="row" spacing={1}>
          {topics.map((topic) => (
            <Chip
              key={topic.slug}
              label={topic.name}
              onClick={() => (window.location.href = `/news/${topic.slug}`)}
              color={topic.slug === slug ? "primary" : "default"}
              clickable
            />
          ))}
        </Stack>
      </Box>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress />
        </Box>
      ) : articles.length === 0 ? (
        <Typography textAlign="center" mt={8} color="text.secondary">
          No articles found.
        </Typography>
      ) : (
        <Grid container spacing={4}>
          {articles.map((article) => (
            <Grid item xs={12} sm={6} md={4} key={article.id}>
              <a
                href={article.reference_url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ textDecoration: "none" }}
              >
                <StyledCard>
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                        minHeight: 64,
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ minHeight: 60 }}
                    >
                      {article.content.slice(0, 100)}...
                    </Typography>
                  </CardContent>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default TopicPage;
