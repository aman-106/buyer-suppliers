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
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import SimpleRating from "./DivisionList";
import Rating from '@material-ui/lab/Rating';

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    height: "100%",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "180px",
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    borderRadius: 8,
    top: "10%",
    left: "34%",
    height: "600px",
    boxShadow: theme.shadows[5],
    // padding: theme.spacing(2, 4, 3)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
    color: theme.palette.secondary.main,
  },
}));

export default function DivisionDetails(props) {
  const classes = useStyles();
  const { details, closeDetails } = props;
  const {
    name,
    industry_category,
    industry_sub_category,
    rating,
    state,
    quality_rating,
    timeline_rating,
    payment_terms_rating,
    // openDetails
  } = details;

  const [open, setOpen] = React.useState(true);
  console.log("Details", quality_rating);
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    closeDetails(false);
  };

  return (
    <React.Fragment>
      <Dialog
        open
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        {/* <DialogTitle id="alert-dialog-title">{"Business Details"}</DialogTitle> */}
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {/* <Typography className={classes.title} variant="h6">
              {" "}
              Name : {" "}
            </Typography>
            <Typography className={classes.title} variant="h6">
              {" "}
              Industry name : {" "}
            </Typography>
            <Typography className={classes.title} variant="h6">
              {" "}
              Industry Sub Category : {" "}
            </Typography>
            <Typography className={classes.title} variant="h6">
              {" "}
              State : {" "}
            </Typography> */}

            
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
              {industry_category}
            </Typography>
            <Typography className={classes.pos} color="textSecondary">
              {industry_sub_category}
            </Typography>
            <Typography variant="body2" component="p">
              {state}
            </Typography>
            <Typography variant="body2" component="p">
              {'   '}
            </Typography>
            <Typography
              className={classes.title}
              variant="h6"
              component="legend"
            >
              Rating :
              <Rating name="read-only" value={rating} readOnly />
            </Typography>


            <Typography
              className={classes.title}
              variant="h6"
              component="legend"
            >
              Quality :
              <Rating value={quality_rating} />
            </Typography>

            <Typography
              className={classes.title}
              variant="h6"
              component="legend"
            >
              Timeline :
              <Rating value={timeline_rating} />
            </Typography>

            <Typography
              className={classes.title}
              variant="h6"
              component="legend"
            >
              Payment Terms :
              <Rating value={payment_terms_rating} />
            </Typography>

            {/* <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Additional Comments"
              value={state.review}
            /> */}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
