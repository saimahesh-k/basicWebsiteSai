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
  Fade,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import NewsHeader from "../Components/NewsHeader";
import NewsFooter from "../Components/NewsFooter";
import InFleekLogoComponent from "../Components/InFleekLogo";

// Icons
import PublicIcon from "@mui/icons-material/Public";
import MemoryIcon from "@mui/icons-material/Memory";
import MovieIcon from "@mui/icons-material/Movie";
import GavelIcon from "@mui/icons-material/Gavel";
import BusinessIcon from "@mui/icons-material/Business";
import SportsCricketIcon from "@mui/icons-material/SportsCricket";
import PsychologyIcon from "@mui/icons-material/Psychology";
import SmartphoneIcon from "@mui/icons-material/Smartphone";
import SecurityIcon from "@mui/icons-material/Security";
import WhatshotIcon from "@mui/icons-material/Whatshot";

interface Topic {
  id: number;
  name: string;
  slug: string;
}

const iconMap: Record<string, JSX.Element> = {
  "social-media": <PublicIcon sx={{ fontSize: 30, mb: 1 }} />,
  "technology-news": <MemoryIcon sx={{ fontSize: 30, mb: 1 }} />,
  "entertainment-celebrities": <MovieIcon sx={{ fontSize: 30, mb: 1 }} />,
  "politics-governance": <GavelIcon sx={{ fontSize: 30, mb: 1 }} />,
  "startup-business": <BusinessIcon sx={{ fontSize: 30, mb: 1 }} />,
  "cricket-sports": <SportsCricketIcon sx={{ fontSize: 30, mb: 1 }} />,
  "ai-innovation": <PsychologyIcon sx={{ fontSize: 30, mb: 1 }} />,
  "mobile-gadget-reviews": <SmartphoneIcon sx={{ fontSize: 30, mb: 1 }} />,
  "cybersecurity-privacy": <SecurityIcon sx={{ fontSize: 30, mb: 1 }} />,
  "viral-trends-memes": <WhatshotIcon sx={{ fontSize: 30, mb: 1 }} />,
};

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

const GradientCard = styled(Card)(({ theme }) => ({
  background: "linear-gradient(135deg, #2193b0, #6dd5ed)",
  color: "#fff",
  height: "160px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
  transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  "&:hover": {
    transform: "scale(1.05)",
    boxShadow: "0 12px 24px rgba(0,0,0,0.3)",
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
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch topics:", err);
        setLoading(false);
      });
  }, []);

  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      <NewsHeader />
      <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: "1200px", mx: "auto", flex: 1 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
          <InFleekLogoComponent width={50} height={50} />
        </Box>
        
        <Typography
          variant="h4"
          fontWeight="bold"
          gutterBottom
          textAlign="center"
        >
          Trending News Topics
        </Typography>
        <Typography
          variant="h6"
          color="primary"
          textAlign="center"
          sx={{ 
            fontStyle: 'italic', 
            mb: 1,
            fontWeight: 500,
          }}
        >
          Your Daily Dose, On Fleek
        </Typography>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          textAlign="center"
          gutterBottom
        >
          Stay updated with the latest trends
        </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid container spacing={4} justifyContent="center" mt={2}>
          {topics.map((topic, i) => (
            <Fade in timeout={500 + i * 100} key={topic.slug}>
              <Grid item xs={12} sm={6} md={4}>
                <CardActionArea onClick={() => navigate(`/news/${topic.slug}`)}>
                  <GradientCard>
                    <CardContent sx={{ textAlign: "center" }}>
                      {iconMap[topic.slug] || (
                        <WhatshotIcon sx={{ fontSize: 30, mb: 1 }} />
                      )}
                      <Typography variant="h6">{topic.name}</Typography>
                    </CardContent>
                  </GradientCard>
                </CardActionArea>
              </Grid>
            </Fade>
          ))}
        </Grid>
      )}
      </Box>
      <NewsFooter />
    </Box>
  );
};

export default NewsPage;
