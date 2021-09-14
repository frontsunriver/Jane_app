import React, { useState } from "react";
import styled from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";

import {
  Button,
  CardContent,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Badge as MuiBadge,
  Breadcrumbs as MuiBreadcrumbs,
  Card as MuiCard,
  Divider as MuiDivider,
  Switch,
  Typography,
} from "@material-ui/core";
import { Mail as MailIcon } from "@material-ui/icons";
import { spacing } from "@material-ui/system";

const Card = styled(MuiCard)(spacing);

const Badge = styled(MuiBadge)(spacing);

const Spacer = styled.div(spacing);

const Divider = styled(MuiDivider)(spacing);

const Breadcrumbs = styled(MuiBreadcrumbs)(spacing);

function IconBadges() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Icon Badges
        </Typography>
        <Typography variant="body2" gutterBottom>
          Examples of badges on icons containing text, using primary and
          secondary colors.
        </Typography>

        <Spacer mb={6} />

        <Badge badgeContent={4} color="primary" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={10} color="secondary" mr={4}>
          <MailIcon />
        </Badge>
      </CardContent>
    </Card>
  );
}

function ColoredIconBadges() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Colored Icon Badges
        </Typography>
        <Typography variant="body2" gutterBottom>
          Examples of badges on icons containing text, using the available theme
          palette colors.
        </Typography>

        <Spacer mb={6} />

        <Badge badgeContent={4} color="primary" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="secondary" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="success" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="warning" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="error" mr={4}>
          <MailIcon />
        </Badge>
        <Badge badgeContent={4} color="info" mr={4}>
          <MailIcon />
        </Badge>
      </CardContent>
    </Card>
  );
}

function ButtonBadges() {
  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Button Badges
        </Typography>
        <Typography variant="body2" gutterBottom>
          Examples of badges on buttons containing text, using primary and
          secondary colors.
        </Typography>

        <Spacer mb={6} />

        <Badge color="error" badgeContent={4} mr={4}>
          <Button variant="contained">Button</Button>
        </Badge>
        <Badge color="error" badgeContent={4} mr={4}>
          <Button variant="contained">Button</Button>
        </Badge>
      </CardContent>
    </Card>
  );
}

function BadgeVisibility() {
  const [invisible, setInvisible] = useState(false);

  const handleBadgeVisibility = () => {
    setInvisible(!invisible);
  };

  return (
    <Card mb={6}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Badge Visibility
        </Typography>
        <Typography variant="body2" gutterBottom>
          The visibility of badges can be controlled using the invisible
          property.
        </Typography>

        <Spacer mb={6} />

        <div>
          <Badge color="secondary" badgeContent={4} invisible={invisible}>
            <MailIcon />
          </Badge>
        </div>
        <FormGroup row>
          <FormControlLabel
            control={
              <Switch
                color="primary"
                checked={!invisible}
                onChange={handleBadgeVisibility}
              />
            }
            label="Show Badge"
          />
        </FormGroup>
      </CardContent>
    </Card>
  );
}

function Badges() {
  return (
    <React.Fragment>
      <Helmet title="Badges" />
      <Typography variant="h3" gutterBottom display="inline">
        Badges
      </Typography>

      <Breadcrumbs aria-label="Breadcrumb" mt={2}>
        <Link component={NavLink} to="/">
          Dashboard
        </Link>
        <Link component={NavLink} to="/">
          Components
        </Link>
        <Typography>Badges</Typography>
      </Breadcrumbs>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} md={6}>
          <IconBadges />
          <ColoredIconBadges />
        </Grid>
        <Grid item xs={12} md={6}>
          <ButtonBadges />
          <BadgeVisibility />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Badges;
