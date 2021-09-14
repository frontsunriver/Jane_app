import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { rgba } from "polished";

import {
  Box,
  Button,
  Container,
  Grid,
  Tooltip,
  Typography as MuiTypography,
} from "@material-ui/core";
import { spacing } from "@material-ui/system";
import { Visibility as VisibilityIcon } from "@material-ui/icons";
import { ArrowForward as ArrowForwardIcon } from "@material-ui/icons";

const Typography = styled(MuiTypography)(spacing);

const Wrapper = styled.div`
  padding-top: 3.5rem;
  position: relative;
  text-align: center;
  overflow: hidden;
`;

const Content = styled.div`
  padding: ${(props) => props.theme.spacing(6)} 0;
  line-height: 150%;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  display: block;
  box-shadow: 0 6px 18px 0 rgba(18, 38, 63, 0.075);
  border-radius: 5px;
  transform: perspective(2000px) rotateX(25deg);
  z-index: 0;
  position: relative;
  image-rendering: optimizequality;
  image-rendering: -webkit-optimize-contrast;
  margin-bottom: -100px;
  margin-top: -35px;
  ${(props) => props.theme.breakpoints.up("md")} {
    margin-top: -50px;
  }
`;

const ImageWrapper = styled.div`
  &:before {
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.02));
    bottom: 0;
    left: 0;
    position: absolute;
    content: " ";
    z-index: 1;
    display: block;
    width: 100%;
    height: 75px;
    pointer-events: none;
  }
`;

const Title = styled(Typography)`
  opacity: 0.9;
  line-height: 1.4;
  font-size: 1.75rem;
  font-weight: ${(props) => props.theme.typography.fontWeightBold};

  ${(props) => props.theme.breakpoints.up("sm")} {
    font-size: 2rem;
  }

  ${(props) => props.theme.breakpoints.up("md")} {
    font-size: 2.5rem;
  }

  span {
    color: ${(props) => props.theme.palette.secondary.main};
  }
`;

const Subtitle = styled(Typography)`
  font-size: ${(props) => props.theme.typography.h6.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightRegular};
  font-family: ${(props) => props.theme.typography.fontFamily};
  margin: ${(props) => props.theme.spacing(2)} 0;
`;

const BrandIcon = styled.img`
  vertical-align: middle;
  margin-right: ${(props) => props.theme.spacing(3)};
  height: auto;
`;

const Visibility = styled(VisibilityIcon)`
  margin-right: ${(props) => props.theme.spacing(2)};
`;

const ArrowForward = styled(ArrowForwardIcon)`
  margin-left: ${(props) => props.theme.spacing(2)};
`;

const Version = styled(MuiTypography)`
  color: ${(props) => props.theme.palette.primary.main};
  font-weight: ${(props) => props.theme.typography.fontWeightBold};
  background: ${(props) => rgba(props.theme.palette.primary.main, 0.1)};
  box-shadow: 0 1px 1px
    ${(props) => rgba(props.theme.palette.primary.main, 0.25)};
  padding: 3px 8px;
  border-radius: 4px;
  margin-bottom: ${(props) => props.theme.spacing(3)};
  display: inline-block;
`;

function Introduction() {
  return (
    <Wrapper>
      <Container>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={9} md={8} lg={8}>
            <Content>
              <Version variant="body2">v3.0.0</Version>
              <Title variant="h1" gutterBottom>
                The simplest and fastest way to build your next{" "}
                <span>Material-UI</span> dashboard or app.
              </Title>
              <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} lg={10}>
                  <Subtitle color="textSecondary">
                    Material App comes with hundreds of UI elements, forms,
                    tables, charts, pages and icons that helps you to create
                    your web apps or applications faster.
                  </Subtitle>
                </Grid>
              </Grid>
              <Box my={6}>
                <Button
                  href="#demos"
                  variant="contained"
                  color="secondary"
                  size="large"
                >
                  <Visibility />
                  Live Demo
                  <ArrowForward />
                </Button>
              </Box>

              <Typography variant="body2" color="textSecondary">
                Available for:
              </Typography>
              <Box my={3}>
                <Tooltip title="Figma">
                  <BrandIcon
                    alt="Figma"
                    src="/static/img/brands/figma.svg"
                    style={{ width: "22px" }}
                  />
                </Tooltip>
                <Tooltip title="Sketch">
                  <BrandIcon
                    alt="Sketch"
                    src="/static/img/brands/sketch.svg"
                    style={{ width: "34px" }}
                  />
                </Tooltip>
                <Tooltip title="JavaScript">
                  <BrandIcon
                    alt="JavaScript"
                    src="/static/img/brands/javascript.svg"
                    style={{ width: "40px" }}
                  />
                </Tooltip>
                <Tooltip title="TypeScript">
                  <BrandIcon
                    alt="TypeScript"
                    src="/static/img/brands/typescript.svg"
                    style={{ width: "40px", background: "#FFF" }}
                  />
                </Tooltip>
              </Box>
            </Content>
          </Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="center" spacing={4}>
          <Grid item xs={12} sm={10} md={9} lg={9}>
            <ImageWrapper>
              <NavLink to="/dashboard/analytics" target="_blank">
                <Image
                  alt="Material App - React Admin Template"
                  src={`/static/img/screenshots/dashboard-analytics-large.jpg`}
                />
              </NavLink>
            </ImageWrapper>
          </Grid>
        </Grid>
      </Container>
    </Wrapper>
  );
}

export default Introduction;
