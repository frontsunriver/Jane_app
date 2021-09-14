import * as React from "react";
import styled from "styled-components/macro";
import { spacing } from "@material-ui/system";
import { Link } from "react-router-dom";

import { Box, Chip, Container, Grid, Typography, Button } from "@material-ui/core";

import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

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

const Bar2Component = () => (
  <React.Fragment>
    <div>
      <Wrapper>
        <Container style={{marginTop: "50px"}}>
            <div style={{textAlign: "center"}}>
                <span style={{color: "#00c1ca", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>Staff & Owners </span><span style={{color: "#999999", fontWeight: "500", fontSize: "50px", lineHeight: "1.1"}}>are happy.</span>
            </div>
            <Typography variant="h6" align="center" style={{marginTop: "20px", letterSpacing: "1px", color: "#999999", fontFamily: "'ProximaNovaRgRegular', arial, sans-serif"}}>
                Jane makes admin a breeze and creates super efficient workdays for staff. And clinics love knowing they're always working with the most up-to-date version, with no annoying upgrades to make or extra charges for new features.
            </Typography>
            <Grid container spaing={10} style={{marginTop:"50px"}}>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-extra-hands-ebc8ec15b0cee437de387b1d07280d5b.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}></div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Extra Hands</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        Jane does the work of a full-time staff person, including sending patients reminders by email & SMS which frees up front desk staff to do other things.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-real-time-booking-bg-816f93e2fc3ae7cc861c6ef62cc6195f.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}></div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Real-Time Booking</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        When a patient books an appointment online, front-desk staff see it immediately so there’s no risk of double booking.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={10} sm={10} md={10} lg={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            <div style={{ marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-simple-billing-a78825dd53e33c024b0f3b879e47c5db.png)", backgroundPosition: "center center", width: "75px", height: "80px"}}></div>
                        </Grid>
                        <Grid item xs={2} sm={2} md={2} lg={2}>
                            <ArrowForwardIosIcon color="inherit" fontSize="large" style={{color: "#928c92"}}/>
                        </Grid>
                        
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"30px"}}>Simple Billing</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        In a few clicks, accept credit cards, issue receipts, track insurance billing, and direct bill to a number of insurers. Ridiculously easy.
                    </Typography>
                </Grid>
                <Grid item xs={6} sm={3} md={3} lg={3}>
                    <Grid container spacing={10} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                        <Grid item xs={12} sm={12} md={12} lg={12} style={{display:"flex", alignItems:"center", justifyContent: "center"}}>
                            {/* <div style={{ position: "relative", marginLeft: "85px", backgroundImage: "url(https://jane.app/assets/icon-so-secure-bg-316b660bd45265264a763131dfdfee7a.png)", backgroundPosition: "center center", width: "80px", height: "80px"}}></div> */}
                            <LockOutlinedIcon style={{fontSize: "80px", color: "rgb(167 169 172)"}}/>
                        </Grid>
                    </Grid>
                    <Typography variant="h3" align="center" style={{color: "#00c1ca", marginTop:"30px", marginLeft:"5px"}}>Secure</Typography>
                    <Typography variant="h6" align="center" style={{color: "#555555", letterSpacing: ".02em", marginTop:"30px", fontSize:"15px"}} >
                        Forget inputting data into multiple programs, Jane stores (and password protects) every file so it’s safe, sound and accessible from anywhere.
                    </Typography>
                </Grid>
            </Grid>
            <div style={{marginTop: "50px", letterSpacing: ".02em", border: "0.5px dashed #e9e0e9", width:"100%"}}></div>
        </Container>
      </Wrapper>
    </div>
  </React.Fragment>
);

export default Bar2Component;
