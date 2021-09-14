import * as React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";

import {
  AppBar,
  Button as MuiButton,
  Container,
  Grid,
  Hidden,
  Toolbar,
} from "@material-ui/core";

import { ReactComponent as Logo } from "../../../vendor/logo.svg";

const Button = styled(MuiButton)(spacing);

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const BrandIcon = styled(Logo)`
  margin-right: ${(props) => props.theme.spacing(2)};
  margin-top: -2px;
  color: ${(props) => props.theme.sidebar.header.brand.color};
  fill: ${(props) => props.theme.sidebar.header.brand.color};
  width: 32px;
  height: 32px;

  vertical-align: middle;
  display: inline;
`;

const AppBarComponent = () => (
  <React.Fragment>
    <Container>
    <AppBar position="relative" color="transparent" elevation={0}>
      <Toolbar>
        <Container>
          <Grid container alignItems="center">
            <Grid item>
              {/* <Brand>
                <BrandIcon />
                Material App
              </Brand> */}
              <Hidden mdDown>
                <Button
                  ml={2}
                  color="primary"
                  component={Link}
                  to="/user/signin"
                >
                  Home
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/user/signup"
                >
                  Features
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  Pricing
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  Videos
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  Guid
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  Blog
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  About
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  component={Link}
                  to="/documentation/support"
                >
                  Jobs
                </Button>
              </Hidden>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Hidden mdDown>
                <Button
                  ml={2}
                  color="primary"
                  variant="contained"
                  component={Link}
                  to="/user/signin"
                >
                  Signin
                </Button>
                <Button
                  ml={2}
                  color="success"
                  variant="contained"
                  component={Link}
                  to="/user/signup"
                >
                  Signup
                </Button>
                <Button
                  ml={2}
                  color="inherit"
                  variant="contained"
                  component={Link}
                  to="/documentation/support"
                >
                  Book A Demo
                </Button>
              </Hidden>
            </Grid>
          </Grid>
        </Container>
      </Toolbar>
    </AppBar>
    </Container>
  </React.Fragment>
);

export default AppBarComponent;
