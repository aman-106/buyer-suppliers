import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import MenuItem from "@material-ui/core/MenuItem";
import { useLoggedUserState } from "./helper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "100%"
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
    top: "10%",
    left: "34%",
    height: "600px",
    boxShadow: theme.shadows[5]
    // padding: theme.spacing(2, 4, 3)
  }
}));

export default function DivisionDetails(props) {
  const classes = useStyles();
  const { details } = props;
  const {
    name,
    industry_category,
    industry_sub_category,
    rating,
    state
  } = details;
  return (
    <React.Fragment>
      <Modal open>
        <div className={classes.paper}>
          <Card className={classes.root}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                {name}
              </Typography>
              <Typography variant="h5" component="h2">
                {industry_category}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
                {industry_sub_category}
              </Typography>
              <Typography variant="body2" component="p">
                {state}
              </Typography>
            </CardContent>
            <CardActions>
              {/* <Button size="small" onClick={openFeedback}>
                Provide feedback
              </Button> */}
            </CardActions>
          </Card>
        </div>
      </Modal>
    </React.Fragment>
  );
}
