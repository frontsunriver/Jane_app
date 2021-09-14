import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Box,
  Breadcrumbs as MuiBreadcrumbs,
  Divider as MuiDivider,
  Grid,
  Link,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";

import Code from "../../../components/Code";

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Introduction() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Introduction
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Auth0 is an easy to implement, adaptable authentication and
        authorization platform. Rapidly integrate authentication and
        authorization for web, mobile, and legacy applications so you can focus
        on your core business.
      </Typography>
    </Box>
  );
}

function QuickStart() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Quick start
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Follow these steps if you want to enable Auth0 authentication in your
        application.
      </Typography>
      <Typography variant="h4" gutterBottom>
        1. Enable AuthProvider
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Enable Auth0's <code>AuthProvider</code> in <code>/src/App.js</code>.
        <Code>{`import { AuthProvider } from "./contexts/Auth0Context";
        
function App() {
  return (
    <AuthProvider>
      {content}
    </AuthProvider>;
  )
}`}</Code>
      </Typography>
      <Typography variant="h4" gutterBottom>
        2. Enable useAuth hook
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Enable Auth0's <code>useAuth</code> hook in{" "}
        <code>/src/hooks/useAuth.js</code>.
        <Code>{`import { AuthContext } from "../contexts/Auth0Context";
        
const useAuth = () => {
  return useContext(AuthContext);
};`}</Code>
      </Typography>
    </Box>
  );
}

function HowTo() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        How to use
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Learn how to use Auth0 authentication. There are multiple examples
        included, including sign in, sign up and sign out.
      </Typography>
      <Typography variant="h4" gutterBottom>
        Retreive user info
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <Code>{`import useAuth from '../hooks/useAuth';

const App = () => {
  const { displayName } = useAuth();

  return (
    <span>
      {user.displayName}
    </span>
  );
};`}</Code>
      </Typography>
      <Typography variant="h4" gutterBottom>
        Execute actions
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <Code>{`import useAuth from '../hooks/useAuth';

const App = () => {
  const { signIn } = useAuth();

  return (
    <button onClick={() => signIn()}>
      Sign in
    </button>
  );
};`}</Code>
      </Typography>
    </Box>
  );
}

function Auth0() {
  return (
    <React.Fragment>
      <Helmet title="Auth0" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Auth0
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Auth0</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <QuickStart />
          <HowTo />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Auth0;
