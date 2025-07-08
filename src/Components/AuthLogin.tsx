import React, { useState } from 'react';
import { 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Alert,
  Container
} from '@mui/material';
import { motion } from 'framer-motion';

interface AuthLoginProps {
  onLogin: () => void;
}

const AuthLogin: React.FC<AuthLoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Simple authentication check
    if (username === 'admin' && password === 'admin123') {
      setTimeout(() => {
        onLogin();
        setLoading(false);
      }, 500); // Small delay for better UX
    } else {
      setTimeout(() => {
        setError('Invalid username or password');
        setLoading(false);
      }, 500);
    }
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f8f9fc 0%, #e9ecef 100%)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Card
            sx={{
              width: 400,
              boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
              borderRadius: 2,
            }}
          >
            <CardContent sx={{ p: 4 }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Typography
                  variant="h4"
                  component="h1"
                  gutterBottom
                  sx={{
                    textAlign: "center",
                    color: "#003366",
                    fontWeight: "bold",
                    mb: 3,
                  }}
                >
                  Login
                </Typography>
              </motion.div>

              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <TextField
                  fullWidth
                  label="Username"
                  variant="outlined"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  sx={{ mb: 2 }}
                  required
                />

                <TextField
                  fullWidth
                  label="Password"
                  type="password"
                  variant="outlined"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  sx={{ mb: 3 }}
                  required
                />

                {error && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Alert severity="error" sx={{ mb: 2 }}>
                      {error}
                    </Alert>
                  </motion.div>
                )}

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  size="large"
                  disabled={loading}
                  sx={{
                    backgroundColor: "#003366",
                    "&:hover": {
                      backgroundColor: "#00509e",
                    },
                    py: 1.5,
                    fontSize: "1.1rem",
                  }}
                >
                  {loading ? "Signing in..." : "Sign In"}
                </Button>
              </motion.form>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <Typography
                  variant="body2"
                  sx={{
                    textAlign: "center",
                    mt: 3,
                    color: "#6c757d",
                  }}
                >
                  {/* Demo credentials: admin / admin123 */}
                  Demo credentials: None
                </Typography>
              </motion.div>
            </CardContent>
          </Card>
        </motion.div>
      </Box>
    </Container>
  );
};

export default AuthLogin;
