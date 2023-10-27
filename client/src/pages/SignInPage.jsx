import { Grid, Typography } from '@mui/material';
import React from 'react';

import AuthComponent from '../components/AuthComponent';
import BasePage from './BasePage';

const SignInPage = () => {
  return (
    <BasePage>
      <AuthComponent isSignIn={true} />
    </BasePage>
  );
};

export default SignInPage;
