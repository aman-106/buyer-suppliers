import React, { useState } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { fade, makeStyles } from "@material-ui/core/styles";
import c2foLogo from "./c2foLogo.svg";
import { Badge, Box, Hidden, IconButton } from "@material-ui/core";
import NotificationsIcon from "@material-ui/icons/NotificationsOutlined";
import InputIcon from "@material-ui/icons/Input";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    },
    color: theme.palette.secondary.main
  },
  logo: {
    height: 20,
    width: 80,
    marginRight: theme.spacing(2)
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  inputRoot: {
    color: "inherit"
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper
  }
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const [notifications] = useState([]);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          <img
            alt="logo"
            data-testid="loading-screen:c2fo-logo"
            src={c2foLogo}
            className={classes.logo}
          />
          <Typography className={classes.title} variant="h6" noWrap>
            Review and Rating
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <IconButton>
            <Badge badgeContent={notifications.length} variant="dot">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton>
            <InputIcon />
          </IconButton>
          <IconButton>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
