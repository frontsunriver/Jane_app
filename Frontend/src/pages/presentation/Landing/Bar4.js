import * as React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";

import { Box, Chip, Container, Grid, Typography, Button } from "@material-ui/core";

const Wrapper = styled.div`
  padding-top: 0.0rem;
  padding-bottom: 0.0rem;
  position: relative;
  overflow: hidden;
`;

const Bar4Component = () => (
  <React.Fragment>
    <div style={{backgroundColor: "#eeeeee", marginTop: "20px"}}>
      <Wrapper>
        <Container style={{marginTop: "50px", display: "flex", alignItems: "center", justifyContent:"center"}}>
            <img style={{width: "70%"}} alt="Laptop online booking" src="https://jane.app/assets/laptop_online_booking-28390cf522fb5bb593af549b5cd7e0bc.png" />
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default Bar4Component;
