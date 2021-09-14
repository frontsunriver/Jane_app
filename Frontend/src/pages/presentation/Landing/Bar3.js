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

const Bar3Component = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container style={{marginTop: "50px"}}>
            <div style={{textAlign: "center"}}>
                <span style={{color: "#00c1ca", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>Your patients </span><span style={{color: "#999999", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>will be happy too.</span>
            </div>
            <Typography variant="h6" align="center" style={{marginTop: "20px", letterSpacing: "1px", color: "#999999", fontFamily: "'ProximaNovaRgRegular', arial, sans-serif"}}>
                Jane makes admin a breeze and creates super efficient workdays for staff. And clinics love knowing they're always working with the most up-to-date version, with no annoying upgrades to make or extra charges for new features.
            </Typography>
            <Grid container spaing={10} style={{marginTop:"50px"}}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-easy-booking-bg-ead27eb7eb9b51e9235072fa13598aaf.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}>
                                <span style={{ fontSize: "40px", padding: "17px", color: "#a7a9ac", fontWeight: "800", position: "absolute"}}>14</span>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Easy Booking</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        In a few clicks, clients can book one or multiple visits with their favourite practitioner. Works on a computer, tablet or phone!
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-helpful-reminders-bg-5081ad48bb89ef003e1d0ad54832d7af.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}>
                                <div style={{backgroundImage: "https://jane.app/assets/icon-helpful-reminders-bow-e2c17f9af22c325f7fbf4e8d7a104d86.gif", position:"absolute", width:"65px", height: "35px"}}></div>
                            </div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Helpful Reminders</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        Bing! An appointment reminder arrives by email, which means fewer missed appointments.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-simple-check-in-bg-bb4b2952030093dbc277a4efe1f5f86b.png)", backgroundPosition: "center center", width: "75px", height: "80px"}}></div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Simple Check-In</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        Front desk staff mark when a client has arrived and – whoosh – the practitioner gets a notification so they know to finish up.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ position: "relative", marginLeft: "10px", backgroundImage: "url(https://jane.app/assets/icon-hassle-free-claims-9ad7140c82952d5512b1916b9c6e0059.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}></div>
                        </Grid>
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"5px"}}>Hassle Free Claims</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        Jane makes the complex world of insurance as simple as possible with intuitive ways to track and submit 3rd party billings.
                    </Typography>
                </Grid>
            </Grid>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default Bar3Component;
