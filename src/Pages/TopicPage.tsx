// File: src/pages/TopicPage.tsx

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Chip,
  CircularProgress,
  Stack,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NewsHeader from "../Components/NewsHeader";
import NewsFooter from "../Components/NewsFooter";

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
  created_at?: string;
  published_date?: string;
}

// Define the order of categories as specified
const categoryOrder = [
  'startup-business',
  'entertainment-celebrities', 
  'politics-governance',
  'cricket-sports',
  'technology-news',
  'ai-innovation',
  'social-media',
  'viral-trends-memes',
  'cybersecurity-privacy',
  'mobile-gadget-reviews'
];

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
      .then((data) => {
        // Sort topics according to the specified order
        const sortedTopics = data.sort((a: Topic, b: Topic) => {
          const aIndex = categoryOrder.indexOf(a.slug);
          const bIndex = categoryOrder.indexOf(b.slug);
          
          // If both topics are in the order list, sort by their position
          if (aIndex !== -1 && bIndex !== -1) {
            return aIndex - bIndex;
          }
          // If only one is in the list, prioritize it
          if (aIndex !== -1) return -1;
          if (bIndex !== -1) return 1;
          // If neither is in the list, maintain original order
          return 0;
        });
        
        setTopics(sortedTopics);
      })
      .catch(console.error);
  }, []);

  useEffect(() => {
    if (!slug) return;
    setLoading(true);
    fetch(`https://ksaimahesh.in/get_articles_by_slug.php?slug=${slug}`)
      .then((res) => res.json())
      .then((data) => {
        let articlesList = data.articles || [];
        
        // Filter articles created after 2025-07-25
        const cutoffDate = new Date('2025-07-25T00:00:00');
        const recentArticles = articlesList.filter((article: Article) => {
          const articleDate = new Date(article.created_at || article.published_date || 0);
          return articleDate > cutoffDate;
        });
        
        // Remove duplicate articles based on title
        const uniqueArticles = recentArticles.filter((article: Article, index: number, self: Article[]) => {
          return index === self.findIndex((a) => a.title.toLowerCase().trim() === article.title.toLowerCase().trim());
        });
        
        // Sort articles by date (latest first)
        uniqueArticles.sort((a: Article, b: Article) => {
          const dateA = new Date(a.created_at || a.published_date || 0);
          const dateB = new Date(b.created_at || b.published_date || 0);
          return dateB.getTime() - dateA.getTime();
        });
        
        setArticles(uniqueArticles);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching articles:", err);
        setLoading(false);
      });
  }, [slug]);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      <NewsHeader />
      <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: "1200px", mx: "auto", flex: 1 }}>
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
                  {article.headline_image && (
                    <CardMedia
                      component="img"
                      height="200"
                      image={article.headline_image}
                      alt={article.title}
                      sx={{
                        objectFit: "cover",
                        borderRadius: "16px 16px 0 0"
                      }}
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  )}
                  <CardContent>
                    <Typography
                      variant="h6"
                      gutterBottom
                      sx={{
                        fontWeight: 600,
                        fontSize: "1.1rem",
                        lineHeight: 1.4,
                        minHeight: article.headline_image ? 48 : 64,
                      }}
                    >
                      {article.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ minHeight: 90 }}
                    >
                      {article.content.slice(0, 200)}...
                    </Typography>
                  </CardContent>
                </StyledCard>
              </a>
            </Grid>
          ))}
        </Grid>
      )}
      </Box>
      <NewsFooter />
    </Box>
  );
};

export default TopicPage;
