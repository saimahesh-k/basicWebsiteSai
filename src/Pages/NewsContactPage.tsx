import React from 'react';
import {
  Box,
  Container,
  Typography,
  Paper,
  Grid,
  Divider,
  Button,
  Card,
  CardContent,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email } from '@mui/icons-material';
import NewsHeader from '../Components/NewsHeader';
import NewsFooter from '../Components/NewsFooter';
import InFleekLogoComponent from '../Components/InFleekLogo';

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginTop: theme.spacing(4),
  borderRadius: '12px',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
}));

const ContactCard = styled(Card)(({ theme }) => ({
  height: '100%',
  borderRadius: '12px',
  boxShadow: '0 2px 12px rgba(0, 0, 0, 0.08)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-4px)',
  },
}));

const IconWrapper = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 60,
  height: 60,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  color: 'white',
  margin: '0 auto 16px',
}));

const NewsContactPage: React.FC = () => {
  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@ksaimahesh.in';
  };

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
            Contact InFleekNow
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
                sx={{ fontWeight: 600, color: '#333', mb: 3, textAlign: 'center' }}
              >
                Get in Touch With Us
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ 
                  fontSize: '1.1rem', 
                  lineHeight: 1.7, 
                  color: '#555',
                  textAlign: 'center',
                  mb: 4 
                }}
              >
                Have questions, feedback, or suggestions? We'd love to hear from you. 
                Send us an email for any inquiries related to InFleekNow.
              </Typography>
            </Grid>

            <Grid item xs={12} md={8} sx={{ mx: 'auto' }}>
              <ContactCard>
                <CardContent sx={{ textAlign: 'center', p: 4 }}>
                  <IconWrapper>
                    <Email fontSize="large" />
                  </IconWrapper>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, color: '#333', mb: 2 }}
                  >
                    Email Us
                  </Typography>
                  <Typography
                    variant="body1"
                    paragraph
                    sx={{ lineHeight: 1.6, color: '#555', mb: 3 }}
                  >
                    Send us your messages, feedback, or any inquiries about InFleekNow 
                    directly to our email address.
                  </Typography>
                  <Button
                    variant="contained"
                    size="large"
                    onClick={handleEmailClick}
                    sx={{
                      borderRadius: '25px',
                      px: 4,
                      py: 1.5,
                      fontSize: '1.1rem',
                      textTransform: 'none',
                      boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                      '&:hover': {
                        boxShadow: '0 6px 16px rgba(25, 118, 210, 0.4)',
                      },
                    }}
                  >
                    Send Email
                  </Button>
                  <Typography
                    variant="body2"
                    sx={{ 
                      mt: 2, 
                      color: '#777',
                      fontSize: '0.9rem' 
                    }}
                  >
                    contact@ksaimahesh.in
                  </Typography>
                </CardContent>
              </ContactCard>
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ mt: 4, textAlign: 'center' }}>
                <Typography
                  variant="h6"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#1976d2', mb: 2 }}
                >
                  Why Contact Us?
                </Typography>
                <Grid container spacing={3} sx={{ mt: 2 }}>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                    >
                      News Tips
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#555' }}
                    >
                      Share breaking news or story ideas
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                    >
                      Feedback
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#555' }}
                    >
                      Help us improve InFleekNow
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={4}>
                    <Typography
                      variant="body1"
                      sx={{ fontWeight: 600, color: '#333', mb: 1 }}
                    >
                      General Inquiries
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: '#555' }}
                    >
                      Any questions about our platform
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </StyledPaper>
      </Container>
      
      <NewsFooter />
    </Box>
  );
};

export default NewsContactPage;
