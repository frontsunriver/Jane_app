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
        Firebase Authentication provides backend services, easy-to-use SDKs, and
        ready-made UI libraries to authenticate users to your app. It supports
        authentication using passwords, phone numbers, popular federated
        identity providers like Google, Facebook and Twitter, and more.
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
        Follow these steps if you want to enable Firebase authentication in your
        application.
      </Typography>
      <Typography variant="h4" gutterBottom>
        1. Enable AuthProvider
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Enable Firebase's <code>AuthProvider</code> in <code>/src/App.js</code>.
        <Code>{`import { AuthProvider } from "./contexts/FirebaseAuthContext";
        
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
        Enable Firebase's <code>useAuth</code> hook in{" "}
        <code>/src/hooks/useAuth.js</code>.
        <Code>{`import { AuthContext } from "../contexts/FirebaseAuthContext";
        
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
        Learn how to use Firebase authentication. There are multiple examples
        included, including sign in, sign up, sign out and social logins.
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
  const { signIn, signInWithGoogle } = useAuth();

  return (
    <React.Fragment>
      <button onClick={() => signIn()}>
        Sign in
      </button>
      <button onClick={() => signInWithGoogle()}>
        Sign in with Google
      </button>
    </React.Fragment>
  );
};`}</Code>
      </Typography>
    </Box>
  );
}

function Firebase() {
  return (
    <React.Fragment>
      <Helmet title="Firebase" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Firebase
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Firebase</Typography>
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

export default Firebase;
