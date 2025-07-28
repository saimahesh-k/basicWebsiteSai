import React from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { useNavigate, useLocation } from 'react-router-dom';
import InFleekLogoComponent from './InFleekLogo';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: '#1976d2',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  '&:hover': {
    opacity: 0.9,
  },
}));

const LogoWrapper = styled(Box)(({ theme }) => ({
  marginRight: theme.spacing(1.5),
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

const NavButton = styled(Button)(({ theme }) => ({
  color: 'white',
  textTransform: 'none',
  fontWeight: 500,
  '&:hover': {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
}));

const NewsHeader: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get current date
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  const handleLogoClick = () => {
    navigate('/news');
  };

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <StyledAppBar position="static">
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: 'space-between', minHeight: '64px' }}>
          <LogoContainer onClick={handleLogoClick}>
            <LogoWrapper>
              <InFleekLogoComponent width={44} height={44} />
            </LogoWrapper>
            <Box>
              <Typography
                variant="h5"
                component="div"
                sx={{
                  fontWeight: 'bold',
                  color: 'white',
                  letterSpacing: '0.5px',
                  lineHeight: 1.2,
                }}
              >
                InFleekNow
              </Typography>
              <Typography
                variant="caption"
                component="div"
                sx={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  fontSize: '0.75rem',
                  fontStyle: 'italic',
                  letterSpacing: '0.3px',
                }}
              >
                Your Daily Dose, On Fleek
              </Typography>
            </Box>
          </LogoContainer>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
            <Typography
              variant="body2"
              sx={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.85rem',
                display: { xs: 'none', md: 'block' },
              }}
            >
              {currentDate}
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2 }}>
              <NavButton
                onClick={() => handleNavigation('/news/about')}
                sx={{
                  backgroundColor: isActive('/news/about') ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                }}
              >
                About
              </NavButton>
              <NavButton
                onClick={() => handleNavigation('/news/contact')}
                sx={{
                  backgroundColor: isActive('/news/contact') ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
                }}
              >
                Contact
              </NavButton>
            </Box>
          </Box>
        </Toolbar>
      </Container>
    </StyledAppBar>
  );
};

export default NewsHeader;
