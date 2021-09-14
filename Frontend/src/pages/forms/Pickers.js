import React from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  CardContent,
  Grid,
  Link,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Paper as MuiPaper,
  Typography,
  TextField,
} from "@material-ui/core";
import {
  DatePicker,
  StaticDatePicker,
  DateTimePicker,
  StaticDateTimePicker,
  TimePicker,
  StaticTimePicker,
} from "@material-ui/lab";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

const Paper = styled(MuiPaper)(spacing);

function DatePickerDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          The date picker is rendered as a modal dialog on mobile, and a textbox
          with a popup on desktop.
        </Typography>
        <Paper mt={3}>
          <DatePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function DatePickerStaticDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date picker | Static mode
        </Typography>
        <Typography variant="body2" gutterBottom>
          It's possible to render any date picker without the modal/popover and
          text field. This can be helpful when building custom popover/modal
          containers.
        </Typography>
        <Paper mt={3}>
          <StaticDatePicker
            displayStaticWrapperAs="desktop"
            openTo="year"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function DateTimePickerDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date time picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          It's possible to render any date picker without the modal/popover and
          text field. This can be helpful when building custom popover/modal
          containers.
        </Typography>
        <Paper mt={3}>
          <DateTimePicker
            renderInput={(props) => <TextField {...props} />}
            label="DateTimePicker"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function DateTimePickerStaticDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Date time picker | Static mode
        </Typography>
        <Typography variant="body2" gutterBottom>
          It's possible to render any date & time picker inline. This will
          enable building custom popover/modal containers.
        </Typography>
        <Paper mt={3}>
          <StaticDateTimePicker
            displayStaticWrapperAs="desktop"
            openTo="year"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}
function TimePickerDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Time picker
        </Typography>
        <Typography variant="body2" gutterBottom>
          The date picker is rendered as a modal dialog on mobile, and a textbox
          with a popup on desktop.
        </Typography>
        <Paper mt={3}>
          <TimePicker
            label="Basic example"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function TimePickerStaticDemo() {
  const [value, setValue] = React.useState(null);

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Time picker | Static mode
        </Typography>
        <Typography variant="body2" gutterBottom>
          It's possible to render any time picker inline. This will enable
          building custom popover/modal containers.
        </Typography>
        <Paper mt={3}>
          <StaticTimePicker
            displayStaticWrapperAs="mobile"
            value={value}
            onChange={(newValue) => {
              setValue(newValue);
            }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Paper>
      </CardContent>
    </Card>
  );
}

function Pickers() {
  return (
    <React.Fragment>
      <Helmet title="Pickers" />
      <Typography variant="h3" gutterBottom display="inline">
        Pickers
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Forms
        </Link>
        <Typography>Pickers</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <DatePickerDemo />
          <DateTimePickerDemo />
          <TimePickerDemo />
        </Grid>
        <Grid item xs={12} md={6}>
          <DatePickerStaticDemo />
          <DateTimePickerStaticDemo />
          <TimePickerStaticDemo />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Pickers;
