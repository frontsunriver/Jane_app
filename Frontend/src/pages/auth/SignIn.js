import React from "react";
import styled from "styled-components/macro";
import { Helmet } from "react-helmet-async";

import { Avatar, Paper, Typography } from "@material-ui/core";

import { ReactComponent as Logo } from "../../vendor/logo.svg";
import SignInComponent from "../../components/auth/SignIn";

const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up("md")} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)};
`;

function SignIn() {
  return (
    <React.Fragment>
      <Brand />
      <Wrapper>
        <Helmet title="Sign In" />
        {/* <BigAvatar alt="Lucy" src="/static/img/avatars/avatar-1.jpg" /> */}

        {/* <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome back, Lucy!
        </Typography> */}
        <Typography component="h2" variant="body1" align="center">
          Sign in to your account to continue
        </Typography>

        <SignInComponent />
      </Wrapper>
    </React.Fragment>
  );
}

export default SignIn;
