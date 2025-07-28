import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import NewsHeader from '../Components/NewsHeader';
import NewsFooter from '../Components/NewsFooter';
import InFleekLogoComponent from '../Components/InFleekLogo';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const NewsAboutPage: React.FC = () => {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: '#f5f5f5', display: 'flex', flexDirection: 'column' }}>
      <NewsHeader />
      
      <Container maxWidth="lg" sx={{ flex: 1 }}>
        <StyledPaper>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3 }}>
            <InFleekLogoComponent width={60} height={60} />
          </Box>
          
          <Typography
            variant="h3"
            component="h1"
            gutterBottom
            sx={{
              fontWeight: 'bold',
              color: '#1976d2',
              textAlign: 'center',
              mb: 2,
            }}
          >
            About InFleekNow
          </Typography>
          
          <Typography
            variant="h6"
            component="div"
            sx={{
              color: '#1976d2',
              textAlign: 'center',
              fontStyle: 'italic',
              mb: 4,
              opacity: 0.8,
            }}
          >
            Your Daily Dose, On Fleek
          </Typography>

          <Divider sx={{ mb: 4 }} />

          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography
                variant="h5"
                component="h2"
                gutterBottom
                sx={{ fontWeight: 600, color: '#333', mb: 2 }}
              >
                Welcome to InFleekNow
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ fontSize: '1.1rem', lineHeight: 1.7, color: '#555' }}
              >
                InFleekNow is your premier destination for staying informed about the latest happenings 
                across various domains. We curate and present news from multiple categories including 
                startup business, entertainment, politics, sports, technology, AI innovation, and much more.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
              >
                Our Mission
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ lineHeight: 1.6, color: '#555' }}
              >
                To provide accurate, timely, and comprehensive news coverage that keeps our readers 
                informed about the world around them. We believe in delivering quality journalism 
                that matters to you.
              </Typography>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
              >
                What We Cover
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ lineHeight: 1.6, color: '#555' }}
              >
                • Startup & Business News<br />
                • Entertainment & Celebrities<br />
                • Politics & Governance<br />
                • Cricket & Sports<br />
                • Technology News<br />
                • AI & Innovation<br />
                • Social Media Trends<br />
                • Viral Trends & Memes<br />
                • Cybersecurity & Privacy<br />
                • Mobile & Gadget Reviews
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="h6"
                component="h3"
                gutterBottom
                sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
              >
                Stay Connected
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ lineHeight: 1.6, color: '#555' }}
              >
                InFleekNow is committed to bringing you the most relevant and up-to-date information. 
                Our team works around the clock to ensure you have access to breaking news and in-depth 
                analysis across all major categories.
              </Typography>
              <Typography
                variant="body1"
                sx={{ lineHeight: 1.6, color: '#555', fontStyle: 'italic' }}
              >
                Thank you for choosing InFleekNow as your trusted news source.
              </Typography>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
      
      <NewsFooter />
    </Box>
  );
};

export default NewsAboutPage;
