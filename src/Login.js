import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "180px"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    top: "30%",
    left: "34%",
    boxShadow: theme.shadows[5]
    // padding: theme.spacing(2, 4, 3)
  }
}));

export default function Login() {
  const classes = useStyles();

  return (
    <Modal open>
      <div className={classes.paper}>
        <Card className={classes.root}>
          <CardContent className={classes.content}>
            <Typography
              className={classes.title}
              color="textSecondary"
              gutterBottom
            >
              Login
            </Typography>
            <TextField label={"User Name"} variant="outlined"></TextField>
            <TextField label={"Password"} variant="outlined"></TextField>
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary">
              Login
            </Button>
          </CardActions>
        </Card>
      </div>
    </Modal>
  );
}
