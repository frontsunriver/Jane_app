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
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;
  position: relative;
  overflow: hidden;
`;

const SubAppBarComponent = () => (
  <React.Fragment>
    <div style={{ background: "#817fc8" }}>
      <Wrapper>
        <Container alignContent="space-between">
            <Grid container spacing={10}>
                <Grid item xs={12} sm={10} md={10} lg={10} mt={2}>
                    <Typography variant="h7" style={{color: "#fff"}} align="left">
                        ALLIED 2021: Jane Summer School is in the books! Thank you to our presenters and participants. Watch the session replays. 🎥
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={2} md={2} lg={2} alignContent="flex-end" justify="flex-end">
                    <Button style={{ color:"#fff", border: "1px solid #fff", borderRadius: "5px", align:"right"}}>Watch Now</Button>
                </Grid>
            </Grid>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default SubAppBarComponent;
