import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  Box,
  Button,
  Card,
  Checkbox,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import React, { useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import secureLocalStorage from 'react-secure-storage';

const AuthComponent = () => {
  const [email, setEmail] = useState(() => {
    return secureLocalStorage.getItem('email');
  });
  const [password, setPassword] = useState(() => {
    return secureLocalStorage.getItem('password');
  });
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(() => {
    return secureLocalStorage.getItem('rememberMe');
  });

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event) => {
    setPassword(event.target.value);
  };
  const handleCheckbox = (event) => {
    setRememberMe(event.target.checked);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleSignIn = () => {
    if (rememberMe) {
      secureLocalStorage.setItem('email', email);
      secureLocalStorage.setItem('password', password);
      secureLocalStorage.setItem('rememberMe', rememberMe);
    }
  };
  return (
    <Card sx={{ mt: 5 }}>
      <Stack direction="column" spacing={5}>
        <TextField
          fullWidth
          id="outlined-basic"
          label="Email Address"
          variant="outlined"
          value={email}
          onChange={handleEmail}
        />
        <Box margin={0}>
          <FormControl fullWidth variant="outlined">
            <InputLabel
              InputLabelProps={{ style: { fontSize: '1rem' } }}
              htmlFor="outlined-adornment-password"
            >
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={showPassword ? 'text' : 'password'}
              onChange={handlePassword}
              value={password}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Stack
            mt={2}
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Stack direction="row" justifyContent="center" alignItems="center">
              <Checkbox
                checked={rememberMe}
                onChange={handleCheckbox}
                inputProps={{ 'aria-label': 'controlled' }}
                size="small"
                sx={{ paddingLeft: 0 }}
              />
              <Typography variant="body2">Remember Me</Typography>
            </Stack>
            <Link target="_blank" underline="none">
              <Typography
                variant="body2"
                fontWeight="600"
                color="secondary.dark"
              >
                Forgot Password?
              </Typography>
            </Link>
          </Stack>
        </Box>
        <Button variant="rounded" color="primary" onClick={handleSignIn}>
          <Typography variant="errorMessage" p={1.5}>
            Sign In
          </Typography>
        </Button>
        <Divider sx={{ fontSize: '0.9rem', color: 'text.main' }}>
          or continue with
        </Divider>
        <Button
          variant="social"
          startIcon={
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              marginRight="0.3rem"
              padding={0}
            >
              <FcGoogle size={25} />
            </Box>
          }
        >
          Sign up with Google
        </Button>
        <Button
          variant="social"
          startIcon={
            <LinkedInIcon
              sx={{
                transform: 'scale(1.2)',
                color: 'icons.linkedin',
                marginRight: '0.3rem',
              }}
            />
          }
        >
          LinkedIn
        </Button>
        <Typography variant="body2" textAlign="center">
          New to Bobatalks?
          <Link> Sign up here!</Link>
        </Typography>
      </Stack>
    </Card>
  );
};

export default AuthComponent;
