import * as React from "react";
import styled from "styled-components/macro";

import { Box, Chip, Container, Grid, Typography, Button } from "@material-ui/core";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const Wrapper = styled.div`
  padding-top: 0.0rem;
  padding-bottom: 0.0rem;
  position: relative;
  overflow: hidden;
`;

const Bar5Component = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container style={{marginTop: "50px"}}>
            <div style={{textAlign: "center"}}>
                <span style={{color: "#00c1ca", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>A serious problem-solver. </span><span style={{color: "#999999", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>That’s Jane.</span>
            </div>
            <Typography variant="h6" align="center" style={{lineHeight: "1.5", marginTop: "20px", letterSpacing: "1px", color: "#999999", fontFamily: "'ProximaNovaRgRegular', arial, sans-serif"}}>
                See how revolutionary the right software can be for your clinic.
            </Typography>
            <Grid container spaing={50} style={{marginTop:"50px"}}>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca", letterSpacing: ".02em;"}}>Being affordable matters to Jane.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Jane’s pricing is based on the number of practitioners in your clinic – so it always fits your budget. There are no upgrades to buy; and no extra programs are needed to run your clinic.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>There's a powerhouse team behind Jane.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Jane was created by people who operate multiple clinics and people who specialize in simple, intuitive design. Our team truly understands clinic management and easy-to-use software.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>Jane stores your clinic's medical data in country.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Your practice’s data is stored in one of our regional data centers (USA, Canada, United Kingdom, Australia). This is essential to ensure your clinic is acting in accordance with local privacy legislation.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>Bring your own device.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Jane works great on tablets, smart phones, laptops and desktop computers of any flavor: Android, Apple, or Microsoft.
                    </Typography>
                </Grid>
            </Grid>
            <Grid container spaing={50} style={{marginTop:"30px"}}>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>Jane offers unlimited support.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Cloud-based software means there are no programs to install and no costly IT people to call. Jane will help get you started and will be by your side whenever you need assistance.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>Jane works in clinics of every type and size.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Jane was specifically created for interdisciplinary clinics – so just one program works perfectly for everyone from physios and massage therapists to counsellors and midwives.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>No one has features like Jane.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        With Jane, chart privately or share with the whole clinic. Add video or photos to capture a patient’s condition. Book multiple appointments at once. Let Jane automatically schedule to avoid awkward gaps in practitioners’ schedules. And so much more.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3} style={{padding: "0px 10px 0px 10px"}}>
                    <Typography variant="h6" align="left" style={{color: "#00c1ca" }}>Smart and pretty - that’s Jane.</Typography>
                    <Typography variant="h6" align="left" style={{lineHeight: "1.5", color: "#555555", letterSpacing: ".02em", marginTop:"15px", fontSize:"15px"}} >
                        Jane is the world’s best-designed clinic software. Why does that matter? Because all that attention to detail creates a surprisingly easy and enjoyable experience for you and your clients.
                    </Typography>
                </Grid>
            </Grid>
            <div style={{marginTop: "50px", letterSpacing: ".02em", border: "0.5px dashed #e9e0e9", width:"100%"}}></div>
            <div style={{textAlign: "center", letterSpacing: ".07em", marginTop: "50px"}}>
                <span style={{color: "#999999", fontWeight: "500", fontSize: "18px", lineHeight: "1.1"}}>Jane is lovingly made and supported by an enthusiastic (</span><span style={{color: "#00c1ca", fontWeight: "500", fontSize: "18px", lineHeight: "1.1"}}>and growing</span><span style={{color: "#999999", fontWeight: "500", fontSize: "18px", lineHeight: "1.1"}}>) team in North Vancouver, BC.</span>
            </div>
            <div style={{textAlign: "center", letterSpacing: ".07em", marginTop: "50px"}}>
                <span style={{color: "#00c1ca", fontWeight: "500", fontSize: "30px", lineHeight: "1.1"}}>Read Jane's Story</span>
            </div>
            <div style={{marginTop: "50px", letterSpacing: ".02em", border: "0.5px dashed #e9e0e9", width:"100%"}}></div>
            <Grid container spaing={50} style={{marginTop:"50px"}}>
                <Grid item xs={6} sm={4} md={4} lg={4} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <Button variant="contained" >See Jane's features</Button>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <Button variant="contained" >BOOK A DEMO</Button>
                </Grid>
                <Grid item xs={6} sm={4} md={4} lg={4} style={{display:"flex", justifyContent: "center", alignItems: "center"}}>
                    <Button variant="contained" >START USING JANE</Button>
                </Grid>
            </Grid>
            <div style={{marginTop: "50px", letterSpacing: ".02em", border: "0.5px dashed #e9e0e9", width:"100%"}}></div>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default Bar5Component;
