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
import CustomizedRatings from "./Ratings";
import axios from "axios";
import { baseurl, useLoggedUserState } from "./helper";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    maxHeight: "700px",
    overflowY: "scroll"
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
    justifyContent: "space-between"
    // height: "180px"
  },
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    // border: "2px solid #000",
    top: "10%",
    left: "34%",
    height: "400px",
    boxShadow: theme.shadows[5]
    // padding: theme.spacing(2, 4, 3)
  }
}));

export default function ReviewPage({ details,closeFeedback }) {
  const classes = useStyles();
  const {
    name,
    rating,
    timeline_rating,
    quality_rating,
    payment_terms_rating
  } = details;
  const loggedUser = useLoggedUserState();
  // const [showModal, setModalState] = useState(true);
  const [state , setState ] = useState({
    rating,
    timeline_rating,
    quality_rating,
    payment_terms_rating
  });
  function updateValue(key){
    return function(event){
      let value = event;
      if(key==='review'){
        value = event.target.value;
      }
      setState({
        ...state,
        [key]:value,
       }
      );
    };
  }
  
  async function submitReview() {
    try {
      const uuid = loggedUser.uuid;
      const { rating,review } = state ;
      const response = await axios({
        url: baseurl + "submitReview/",
        method: "post",
        data: {
          rating:Number(rating || 0 ),
          review:review|| '',
          uuid
        }
      });
      console.log(response.data);
      closeFeedback();
    } catch (e) {
      console.log(e)
      closeFeedback();
    }
  }


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
              Review
            </Typography>
            {/* <TextField label={"User Name"} variant="outlined" select>
              <MenuItem value={10}> {name}</MenuItem>
            </TextField> */}
            <Typography component="legend">{name}</Typography>
            <Typography component="legend">Rating</Typography>
            <CustomizedRatings rate={rating} updateValue={updateValue('rating')}/>
            <Typography component="legend">Quality</Typography>
            <CustomizedRatings rate={quality_rating} updateValue={updateValue('quality_rating')}/>
            <Typography component="legend">Timeline</Typography>
            <CustomizedRatings rate={timeline_rating} updateValue={updateValue('timeline_rating')} />
            <Typography component="legend">Payment Terms</Typography>
            <CustomizedRatings rate={payment_terms_rating} updateValue={updateValue('payment_terms_rating')}/>
            <TextField
              multiline
              rows={4}
              variant="outlined"
              label="Additional Comments"
              value={state.review}
              onChange={updateValue('review')}
            />
            {/* <TextField label={"Password"} variant="outlined"></TextField> */}
          </CardContent>
          <CardActions>
            <Button variant="contained" color="secondary" onClick={submitReview}>
              Submit
            </Button>
            <Button
              variant="contained"
              color="Primary"
              onClick={closeFeedback}
            >
              Cancel
            </Button>
          </CardActions>
        </Card>
      </div>
    </Modal>
  );
}
