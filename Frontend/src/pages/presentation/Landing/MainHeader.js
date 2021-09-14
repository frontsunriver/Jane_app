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
  padding-top: 3.0rem;
  padding-bottom: 2.0rem;
  position: relative;
  overflow: hidden;
`;

const MainHeader = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container alignContent="space-between">
            <Grid container spacing={10}>
                <Grid item xs={12} sm={10} md={10} lg={10} mt={2}>
                    <Typography variant="h1" align="left" style={{ fontWeight: "lighter", fontSize: "90px"}}>
                        MEET JANE
                    </Typography>
                    <Typography variant="h3" align="left" style={{color: "#9f9999" }}>
                        Book, chart, schedule, invoice, process payments, and run your whole practice online.
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={4} md={4} lg={4} alignContent="flex-end" justify="flex-end">
                    {/* <Button style={{ color:"#fff", border: "1px solid #fff", borderRadius: "5px"}}>Watch Now</Button> */}
                </Grid>
            </Grid>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default MainHeader;
