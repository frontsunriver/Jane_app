import * as React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";

import { Box, Chip, Container, Grid, Typography, Button } from "@material-ui/core";

const Brand = styled.div`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
`;

const Wrapper = styled.div`
  padding-top: 0.0rem;
  padding-bottom: 0.0rem;
  position: relative;
  overflow: hidden;
`;

const Bar1Component = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container style={{marginTop: "50px"}}>
            <div style={{textAlign: "center"}}>
                <span style={{color: "#999999", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>Jane is always available,</span><span style={{color: "#00c1ca", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}> anytime, anywhere.</span>
            </div>
            <Typography variant="h6" align="center" style={{letterSpacing: "1px", lineHeight: "50px", color: "#999999", fontFamily: "'ProximaNovaRgRegular', arial, sans-serif"}}>
                Jane makes admin a breeze and creates super efficient workdays for staff. And clinics love knowing they're always working with the most up-to-date version, with no annoying upgrades to make or extra charges for new features.
            </Typography>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div style={{ backgroundSize: "454px 454px", width: "454px", height: "454px", background: "url(https://jane.app/assets/24-arrows-fb76ae7bbc6f434c434ca24f126accee.png) center center no-repeat",
                                width: "499px", height: "499px", webkitTransition: "-webkit-transform 4s ease-in-out",
                                webkitTransformOrigin: "center center", mozTransformOrigin: "center center", msTransformOrigin: "center center",
                                transformOrigin: "center center"}}>
                                    <span style={{position: "absolute", fontSize: "210px", padding: "90px 165px 160px 125px", color: "#1dbec8"}}>24</span>
                                </div>
            </div>
            <div style={{letterSpacing: ".02em", border: "0.5px dashed #e9e0e9", width:"100%"}}></div>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default Bar1Component;
