import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components/macro";
import { NavLink, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Avatar,
  Breadcrumbs as MuiBreadcrumbs,
  Button as MuiButton,
  Card as MuiCard,
  CardContent,
  Divider as MuiDivider,
  FormControl as MuiFormControl,
  Grid,
  Link,
  TextField as MuiTextField,
  Typography,
} from "@material-ui/core";
import { CloudUpload as MuiCloudUpload } from "@material-ui/icons";
import { spacing } from "@material-ui/system";

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const TextField = styled(MuiTextField)(spacing);

const Button = styled(MuiButton)(spacing);

function Private() {
  const [clickable, setClickable] = useState(false);
  const [newUser, setNewUser] = useState([]);
  const nameRef = useRef('');
  const emailRef = useRef('');
  const addressRef = useRef('');
  const cityRef = useRef('');
  const stateRef = useRef('');
  const zipRef = useRef('');
  const navigate = useNavigate();

  const handleAdd = (e) => {
    e.preventDefault();
    setClickable(true);
    let firstName = newUser.firstName;
    let lastName = newUser.lastName;
    let email = newUser.email;
    let address = newUser.address;
    let city = newUser.city;
    let state = newUser.state;
    let zip = newUser.zip;
    fetch('http://localhost:8000/admins', {
      method: 'POST',
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ firstName, lastName, email, address, state, city, zip })
    }).then(() => {
      setClickable(false);
      setNewUser([]);
      navigate('/admin')
    });
  }
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Please fill in the blank.
        </Typography>

        <Grid container spacing={6}>
          <Grid item md={6}>
            <TextField
              id="first-name"
              label="First name"
              name="firstName"
              variant="outlined"
              fullWidth
              ref={nameRef}
              my={2}
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Grid>
          <Grid item md={6}>
            <TextField
              id="last-name"
              name="lastName"
              label="Last name"
              variant="outlined"
              fullWidth
              my={2}
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Grid>
        </Grid>

        <TextField
          id="email"
          label="Email"
          name="email"
          variant="outlined"
          type="email"
          fullWidth
          ref={emailRef}
          my={2}
          onChange={(event) => {
            setNewUser({
              ...newUser,
              [event.target.name]: event.target.value
            });
          }}
        />

        <TextField
          id="address"
          name="address"
          label="Address"
          variant="outlined"
          fullWidth
          ref={addressRef}
          my={2}
          onChange={(event) => {
            setNewUser({
              ...newUser,
              [event.target.name]: event.target.value
            });
          }}
        />

        <Grid container spacing={6}>
          <Grid item md={6}>
            <TextField
              id="city"
              name="city"
              label="City"
              variant="outlined"
              fullWidth
              ref={cityRef}
              my={2}
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Grid>
          <Grid item md={4}>
            <TextField
              id="state"
              name="state"
              label="State"
              variant="outlined"
              fullWidth
              ref={stateRef}
              my={2}
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Grid>
          <Grid item md={2}>
            <TextField
              id="zip"
              name="zip"
              label="Zip"
              variant="outlined"
              fullWidth
              ref={zipRef}
              my={2}
              onChange={(event) => {
                setNewUser({
                  ...newUser,
                  [event.target.name]: event.target.value
                });
              }}
            />
          </Grid>
        </Grid>

        <Button variant="contained" color="primary" mt={3} onClick={(e) => { handleAdd(e) }} disabled={clickable}>
          Add
        </Button>
      </CardContent>
    </Card>
  );
}

function AdminAdd() {
  return (
    <React.Fragment>
      <Helmet title="Admin Add" />

      <Typography variant="h3" gutterBottom display="inline">
        Admin Add
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Users
        </Link>
        <Link component={NavLink} to="/">
          Admin
        </Link>
        <Typography>Add</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12}>
          <Private />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AdminAdd;
