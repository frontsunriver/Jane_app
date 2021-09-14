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

const SplitBarComponent = () => (
  <React.Fragment>
    <div style={{ background: "url(https://jane.app/assets/jane-graphic-grey-d106415998fc8b2ce9d7018e5de6e3d1.png) center center no-repeat #555555", color: "#ffffff", padding: "16px 0", position: "relative"}}>
      <Wrapper>
        <Container>
            <Typography variant="h5" align="center" style={{ fontSize: "22.5px"}}>
                “Jane Family, you guys are really awesome. Keep the amazing new features coming.
            </Typography>
            <Typography variant="h6" align="center" style={{fontSize: "15px", lineHeight: "35px"}}>
                I love how you consistently make this clinic software better and better by the month! WOW!”
            </Typography>
            <Typography variant="h6" align="center" style={{color: "rgb(224 222 216)", fontSize: "14px", lineHeight: "50px"}}>
                — Sue Shalanski, Reach Physio, Squamish BC
            </Typography>
        </Container>
      </Wrapper>
    </div>
    <div style={{display: "flex", alignItems:"center", justifyContent:"center"}}>
      <div style={{background: "url(https://jane.app/assets/break-arrow-testimony-a8db6cb65be71926e3a0c9cedbae53b1.png) center center no-repeat #555555", width:"40px", height:"10px"}}></div>
    </div>
    
  </React.Fragment>
);

export default SplitBarComponent;
