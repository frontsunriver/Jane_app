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

const UnderVideoBarComponent = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container>
            <div style={{textAlign: "center"}}>
                <span style={{color: "#999999", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>Everyone’s day</span><span style={{color: "#00c1ca", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}> just got easier</span>
            </div>
            <Typography variant="h6" align="center" style={{letterSpacing: "2px", lineHeight: "50px", color: "#999999", fontFamily: "'ProximaNovaRgRegular', arial, sans-serif"}}>
                Jane offers online booking, charting, scheduling, secure video and invoicing on one secure, beautifully designed system.
            </Typography>
            
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default UnderVideoBarComponent;
