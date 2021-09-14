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
        The package includes an implementation of React Router DOM, using the
        programmatic routing model.
      </Typography>
    </Box>
  );
}

function HowToAddRoutes() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        How to add routes
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Open <code>/src/routes.js</code> and add your new route to the{" "}
        <code>routes</code> variable. The example below will result in the{" "}
        <code>{`<NewPage />`}</code> element being called on the{" "}
        <code>http://localhost:3000/pages/new</code> route.
        <Code>{`import DashboardLayout from "./layouts/Dashboard";
import NewPage from "./pages/NewPage";

const routes = [
  {
    path: "pages",
    element: <DashboardLayout />,
    children: [
      {
        path: "new",
        element: <NewPage />,
      },
    ],
  },
];

export default routes;`}</Code>
      </Typography>
    </Box>
  );
}

function HowToAddALink() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        How to add a link
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        Learn how to add a link to a component.
        <Code>{`import { Link } from "react-router-dom";

function ExampleComponent() {
  return (
    <Link to="pages/new">
      New page
    </Link>
  );
}

export default ExampleComponent;`}</Code>
      </Typography>
    </Box>
  );
}

function HowToNavigateProgrammatically() {
  return (
    <Box mb={10}>
      <Typography variant="h3" gutterBottom>
        How to navigate programmatically
      </Typography>
      <Typography variant="subtitle1" gutterBottom my={4}>
        The example code below includes an example on how to navigate
        programmatically using the <code>useNavigate</code> hook.
        <Code>{`import { useNavigate } from "react-router-dom";

function ExampleComponent() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/pages/new");
  };

  return (
    <form onSubmit={handleSubmit}>
      ...
    </form>
  );
}

export default ExampleComponent;
`}</Code>
      </Typography>
    </Box>
  );
}

function Routing() {
  return (
    <React.Fragment>
      <Helmet title="Routing" />

      <Grid container spacing={6} justifyContent="center">
        <Grid item xs={12} lg={9} xl={7}>
          <Typography variant="h2" gutterBottom display="inline">
            Routing
          </Typography>

          <Breadcrumbs aria-label="Breadcrumb" mt={2}>
            <Link component={NavLink} to="/">
              Dashboard
            </Link>
            <Link component={NavLink} to="/documentation/welcome">
              Documentation
            </Link>
            <Typography>Routing</Typography>
          </Breadcrumbs>

          <Divider my={6} />

          <Introduction />
          <HowToAddRoutes />
          <HowToAddALink />
          <HowToNavigateProgrammatically />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Routing;
