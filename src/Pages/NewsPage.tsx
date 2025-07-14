// File: src/pages/NewsPage.tsx

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CircularProgress,
} from "@mui/material";
import { styled } from "@mui/material/styles";

interface Topic {
  id: number;
  name: string;
  slug: string;
}

const GradientCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
  color: "#fff",
  height: "150px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  transition: "transform 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
  },
}));

const NewsPage: React.FC = () => {
  const navigate = useNavigate();
  const [topics, setTopics] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://ksaimahesh.in/get_topics.php")
      .then((res) => res.json())
      .then((data) => {
        setTopics(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch topics:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ p: 4 }}>
      <Typography
        variant="h4"
        fontWeight="bold"
        gutterBottom
        textAlign="center"
      >
        Trending News Topics
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center">
          {topics.map((topic) => (
            <Grid item xs={12} sm={6} md={4} key={topic.slug}>
              <CardActionArea onClick={() => navigate(`/news/${topic.slug}`)}>
                <GradientCard>
                  <CardContent>
                    <Typography variant="h6" textAlign="center">
                      {topic.name}
                    </Typography>
                  </CardContent>
                </GradientCard>
              </CardActionArea>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default NewsPage;
