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
        Material App is built using Create Rect App. Follow the steps below to
        migrate to Next.js Migrating to Next.js allows you to use SSR, API
        Routes and more.
      </Typography>
    </Box>
  );
}

function OfficialGuide() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Official guide
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The official guide on how to migrate from Create React App to Next.js
        can be found{" "}
        <Link
          href="https://nextjs.org/docs/migrating/from-create-react-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </Link>
        .
      </Typography>
    </Box>
  );
}

function UpdateDependencies() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Update dependencies
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The first step towards migrating to Next.js is to update package.json
        and dependencies.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Remove the <code>react-scripts</code>, <code>craco</code> and{" "}
        <code>react-router-dom</code> dependencies.
        <Code>{`npm uninstall react-scripts craco react-router-dom`}</Code>
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Install the <code>next.js</code> dependency.
        <Code>{`npm install next --save`}</Code>
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Open the <code>package.json</code> file and replace the{" "}
        <code>scripts</code> with:
        <Code>{`"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start"
}`}</Code>
      </Typography>
    </Box>
  );
}

function UpdateEntryFile() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Update entry file
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Create React App uses the public directory for the entry HTML file (
        <code>public/index.html</code>), whereas Next.js uses a custom file (
        <code>/src/pages/_document.js</code>).
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        All code in the <code>{`<head>`}</code> section of the{" "}
        <code>public/index.html</code> file should be moved to the{" "}
        <code>/src/pages/_document.js</code> file. Learn more{" "}
        <Link
          href="https://nextjs.org/docs/advanced-features/custom-document"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </Link>
        .
      </Typography>
    </Box>
  );
}

function UpdateSharedLayout() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Update shared layout
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Create React App uses the <code>/src/index.js</code> file as an entry
        point, whereas Next.js requires a custom <code>/src/_app.js</code> file.
        You may want to move logic to the new <code>_app.js</code> file. Learn
        more{" "}
        <Link
          href="https://nextjs.org/docs/advanced-features/custom-app"
          target="_blank"
          rel="noreferrer noopener"
        >
          here
        </Link>
        .
      </Typography>
    </Box>
  );
}

function UpdateRoutes() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        Update routes
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        With Create React App, you're likely using React Router. Instead of
        using a third-party library, Next.js includes its own file-system based
        routing.
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        <ul>
          <li>
            Convert all Route components to new files in the{" "}
            <code>src/pages</code> directory. It is recommended to rename the
            files using <code>dash-case</code>.
          </li>
          <li>
            Remove <code>useRoutes</code> from the <code>/src/App.js</code>{" "}
            file.
          </li>
          <li>
            Replace the Link component from <code>react-router-dom</code> with
            the Link component from <code>next/link</code>.
          </li>
        </ul>
        For more information, see{" "}
        <Link
          href="https://nextjs.org/docs/migrating/from-react-router"
          target="_blank"
          rel="noreferrer noopener"
        >
          Migrating from React Router
        </Link>
        .
      </Typography>
    </Box>
  );
}

function MigratingToNextJS() {
  return (
    <React.Fragment>
      <Helmet title="Migrating to Next.js" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Migrating to Next.js
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Migrating to Next.js</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <OfficialGuide />
          <UpdateDependencies />
          <UpdateEntryFile />
          <UpdateSharedLayout />
          <UpdateRoutes />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default MigratingToNextJS;
