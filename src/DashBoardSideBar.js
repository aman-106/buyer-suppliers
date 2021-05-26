import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MailIcon from "@material-ui/icons/Mail";
import Paper from "@material-ui/core/Paper";
import { Avatar } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import avatarimg from "./avatar_6.png";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250
  },
  fullList: {
    width: "auto"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    marginTop: 24
  }
}));

export default function TemporaryDrawer() {
  const classes = useStyles();

  const list = () => (
    <div className={clsx(classes.list)} role="presentation">
      <List>
        {["Ratings", "Business", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Paper className={classes.paper}>
      <div>
        <Box>
          <Avatar src="./avatar_6.png" />
        </Box>
        <Typography color="textPrimary">Ford</Typography>
        <Typography color="textSecondary" variant="body2">
          CEO
        </Typography>
      </div>
      {list()}
    </Paper>
  );
}
