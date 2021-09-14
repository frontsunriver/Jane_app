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

import Code from "../../components/Code";

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
        Guards can be used to protect private or public routes based on the
        current user role.
      </Typography>
    </Box>
  );
}

function AuthGuard() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Auth Guard
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The AuthGuard component can be used to protect a private route from
        unauthenticated users.
        <Code>{`import AuthGuard from "../components/guards/AuthGuard";
        
function Component() {
  return (
    <AuthGuard>
      <PrivateExampleComponent />
    </AuthGuard>
  )
}`}</Code>
      </Typography>
    </Box>
  );
}

function GuestGuard() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Guest Guard
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The GuestGuard component can be used to protect a route from
        authenticated users.
        <Code>{`import GuestGuard from "../components/guards/GuestGuard";
        
function Component() {
  return (
    <GuestGuard>
      <PublicExampleComponent />
    </GuestGuard>
  )
}`}</Code>
      </Typography>
    </Box>
  );
}

function Guards() {
  return (
    <React.Fragment>
      <Helmet title="Guards" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Guards
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Guards</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <AuthGuard />
          <GuestGuard />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Guards;
