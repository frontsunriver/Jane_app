import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";

import { Button, Box, Container, Typography, Tooltip } from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

const Wrapper = styled.div`
  ${spacing};
  text-align: center;
`;

const TypographyOverline = styled(Typography)`
  text-transform: uppercase;
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  height: auto;
`;

const Brand = styled.div`
  background: white;
  display: inline-block;
  padding: 12px 16px;
  border-radius: 10px;
  margin: 10px;
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

function Integrations() {
  return (
    <Wrapper py={20}>
      <Container>
        <TypographyOverline variant="body2" gutterBottom>
          Integrations
        </TypographyOverline>
        <Typography variant="h2" component="h3" gutterBottom>
          Launch faster with ready-to-deploy integrations
        </Typography>

        <Box my={7}>
          <Tooltip title="Material-UI v5">
            <Brand>
              <BrandIcon
                alt="Material-UI"
                src="/static/img/brands/material-ui.svg"
                style={{ height: "34px", margin: "3px 0" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="React v17">
            <Brand>
              <BrandIcon
                alt="React"
                src="/static/img/brands/react.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Redux">
            <Brand>
              <BrandIcon
                alt="Redux"
                src="/static/img/brands/redux.svg"
                style={{ height: "36px", margin: "2px 0" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="React Router v6">
            <Brand>
              <BrandIcon
                alt="React Router v6"
                src="/static/img/brands/react-router.svg"
                style={{ height: "34px", margin: "3px 0" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Firebase">
            <Brand>
              <BrandIcon
                alt="Firebase"
                src="/static/img/brands/firebase.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="JSON Web Token">
            <Brand>
              <BrandIcon
                alt="JWT"
                src="/static/img/brands/jwt.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="Auth0">
            <Brand>
              <BrandIcon
                alt="Auth0"
                src="/static/img/brands/auth0.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
          <Tooltip title="ESLint">
            <Brand>
              <BrandIcon
                alt="eslint "
                src="/static/img/brands/eslint.svg"
                style={{ height: "40px" }}
              />
            </Brand>
          </Tooltip>
        </Box>
        <Box>
          <Button
            component={NavLink}
            to="/documentation/welcome"
            variant="contained"
            color="secondary"
            size="large"
            target="_blank"
          >
            Open Documentation
            <ArrowForward />
          </Button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Integrations;
