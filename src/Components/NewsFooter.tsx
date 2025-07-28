import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  IconButton,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Email, LinkedIn, Twitter, Facebook } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import InFleekLogoComponent from './InFleekLogo';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: '#1976d2',
  color: 'white',
  paddingTop: theme.spacing(6),
  paddingBottom: theme.spacing(4),
  marginTop: 'auto',
}));

const SocialIconButton = styled(IconButton)(({ theme }) => ({
  color: 'rgba(255, 255, 255, 0.8)',
  '&:hover': {
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const NewsFooter: React.FC = () => {
  const navigate = useNavigate();
  const currentYear = new Date().getFullYear();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:contact@ksaimahesh.in';
  };

  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Section */}
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <InFleekLogoComponent width={40} height={40} />
              <Box sx={{ ml: 1.5 }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', lineHeight: 1.2 }}>
                  InFleekNow
                </Typography>
                <Typography variant="caption" sx={{ 
                  fontStyle: 'italic', 
                  opacity: 0.9,
                  fontSize: '0.75rem' 
                }}>
                  Your Daily Dose, On Fleek
                </Typography>
              </Box>
            </Box>
            <Typography variant="body2" sx={{ 
              opacity: 0.8, 
              lineHeight: 1.6,
              mb: 2 
            }}>
              Stay informed with the latest news across technology, business, 
              entertainment, politics, and more. Your trusted source for current events.
            </Typography>
            
            {/* Social Media Icons */}
            <Box sx={{ display: 'flex', gap: 1 }}>
              <SocialIconButton size="small">
                <Facebook fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small">
                <Twitter fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small">
                <LinkedIn fontSize="small" />
              </SocialIconButton>
              <SocialIconButton size="small" onClick={handleEmailClick}>
                <Email fontSize="small" />
              </SocialIconButton>
            </Box>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: '1rem'
            }}>
              Quick Links
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Home
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/about')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                About Us
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/contact')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Contact
              </Typography>
            </Box>
          </Grid>

          {/* News Categories */}
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: '1rem'
            }}>
              News Categories
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/technology-news')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Technology
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/startup-business')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Business
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/entertainment-celebrities')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Entertainment
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/cricket-sports')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Sports
              </Typography>
              <Typography 
                variant="body2" 
                onClick={() => handleNavigation('/news/politics-governance')}
                sx={{ 
                  color: 'rgba(255, 255, 255, 0.8)', 
                  cursor: 'pointer',
                  '&:hover': { color: 'white', textDecoration: 'underline' }
                }}
              >
                Politics
              </Typography>
            </Box>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <Typography variant="h6" sx={{ 
              fontWeight: 'bold', 
              mb: 2,
              fontSize: '1rem'
            }}>
              Get In Touch
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  Email:
                </Typography>
                <Typography 
                  variant="body2" 
                  onClick={handleEmailClick}
                  sx={{ 
                    color: 'rgba(255, 255, 255, 0.8)', 
                    cursor: 'pointer',
                    '&:hover': { color: 'white', textDecoration: 'underline' }
                  }}
                >
                  contact@ksaimahesh.in
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" sx={{ opacity: 0.8, mb: 0.5 }}>
                  For News Tips:
                </Typography>
                <Typography variant="body2" sx={{ opacity: 0.7, fontSize: '0.85rem' }}>
                  Share breaking news or story ideas with us
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ 
          my: 4, 
          borderColor: 'rgba(255, 255, 255, 0.2)' 
        }} />

        {/* Bottom Section */}
        <Box sx={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 2
        }}>
          <Typography variant="body2" sx={{ opacity: 0.7 }}>
            © {currentYear} InFleekNow. All rights reserved.
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3 }}>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                cursor: 'pointer',
                fontSize: '0.85rem',
                '&:hover': { color: 'white', textDecoration: 'underline' }
              }}
            >
              Privacy Policy
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                cursor: 'pointer',
                fontSize: '0.85rem',
                '&:hover': { color: 'white', textDecoration: 'underline' }
              }}
            >
              Terms of Service
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.8)', 
                cursor: 'pointer',
                fontSize: '0.85rem',
                '&:hover': { color: 'white', textDecoration: 'underline' }
              }}
            >
              Cookie Policy
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default NewsFooter;
