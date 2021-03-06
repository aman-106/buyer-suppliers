import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import DivisionDetails from "./DivisionDetails";
import Rating from "@material-ui/lab/Rating";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import classnames from "clsx";
import { baseurl, useLoggedUserState } from "./helper";
import axios from "axios";
import ReviewPage from "./ReviewPage";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import RateReviewIcon from "@material-ui/icons/RateReview";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    // maxWidth: 360,
    backgroundColor: theme.palette.background.paper
  },
  primary: {
    color: "#005d83",
    overflow: "hidden",
    "font-size": "16px",
    "white-space": "nowrap",
    "text-overflow": "ellipsis",
    "text-decoration": "none"
  },
  backgroundHover: {
    "&:hover": {
      "background-color": "rgba(4, 161, 200, 0.1)"
    },
    display:'flex',
    flexDirection:'row',
    // justifyContent:'space-betweeen',
    alignItems:"center",
    '& > div':{
      // display:'flex',
      flexBasis:'20%',
    }
  },
  rowOdd: {
    "background-color": "#f5f3f2"
  }
}));

export function SimpleRating({ rate = 2 }) {
  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend"></Typography>
        <Rating name="read-only" value={rate} readOnly />
      </Box>
    </div>
  );
}

function getReveiewIcon(iconType) {
  return <SimpleRating rate={Math.floor(iconType)} />;
}

function DataList({ list = [], openDetails, openFeedback }) {
  const classes = useStyles();
  const loggedUser = useLoggedUserState();
  const headre =[];

  const arr = list.map(function (elem, index) {
    return elem.name ? (
      <React.Fragment key={index}>
        <ListItem
          button
          onClick={openDetails(index)}
          classes={{
            root: classnames(classes.backgroundHover, {
              [classes.rowOdd]: index % 2
            })
          }}
        >
          <ListItemText
            primary={elem.name}
            secondary={elem.industry_category}
            classes={{ primary: classes.primary }}
          />
          <ListItemText primary={elem.state} secondary={elem.city}/>
          <ListItemIcon>{getReveiewIcon(Math.floor(elem.rating))}</ListItemIcon>
          {
            loggedUser ? (
              <IconButton
                edge="end"
                aria-label="rate_and_review"
                onClick={openFeedback(index)}
              >
                <RateReviewIcon />
              </IconButton>
            ):false
          }
        </ListItem>
      </React.Fragment>
    ):false;
  });

  return [
    headre
    ,...arr
  ]
}

const mockList = [
  {
    city: "Brooklyn",
    postal_code: "12355",
    country: "USA",
    cs_industry_desc: "Fish and Seafoods",
    dnb_industry: "Manufacturing",
    dnb_primary_sic: "2021",
    dnb_primary_naics_desc: "Seafood Product Preparation and Packaging",
    state: "NY",
    name: "Raj Industries",
    Rating: 3.5,
    Review: "Good"
  },
  {
    city: "Brooklyn",
    postal_code: "12355",
    country: "USA",
    cs_industry_desc: "Fish and Seafoods",
    dnb_industry: "Manufacturing",
    dnb_primary_sic: "2021",
    dnb_primary_naics_desc: "Seafood Product Preparation and Packaging",
    state: "NY",
    name: "Raj Industries",
    Rating: 1,
    Review: "Good"
  }
];
let load = false;

export default function DivisionList({ list = [], loadData = false }) {
  const classes = useStyles();
  const [showDetails, openDetails] = useState(false);
  const loggedUser = useLoggedUserState();
  const [dataList, setDataList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const [feedback, openFeedback] = useState(false);

  function openSelected(index) {
    return function () {
      setSelectedIndex(index);
      openDetails(true);
    };
  }

  async function getEnagagedEntity(uuid) {
    try{
      const response = await axios({
        method:"post",
        url: baseurl + "getEngagedEntity/",
        data: {
          uuid
        }
      });
     setDataList((response.data && response.data.entity_list) || []);
    }catch(e){}
  }

  useEffect(() => {
    if (loadData) {
      const uuid = loggedUser && loggedUser.uuid;
      getEnagagedEntity(uuid);
    }
  }, []);

  useEffect(()=>{
    if(!loadData){
      setDataList(list);
    }
    // return ()=>{
    //   load  = false;
    // }
  },[list]);

  function handleOpenFeedback(index) {
    return function (event) {
      event.stopPropagation();
      setSelectedIndex(index);
      openFeedback(true);
    };
  }

  function closeFeedback(){
    openFeedback(false);
    if (loadData) {
      const uuid = loggedUser && loggedUser.uuid;
      getEnagagedEntity(uuid);
    }else{

    }
  }

  function closeDetails(){
    openDetails(false);
  }

  return (
    <div className={classes.root}>
      <DataList
        list={dataList}
        openDetails={openSelected}
        openFeedback={handleOpenFeedback}
      />
      {showDetails && (
        <DivisionDetails
          details={dataList && dataList.length && dataList[selectedIndex]}
          closeDetails={closeDetails}
        />
      )}
      {feedback && (
        <ReviewPage
          details={dataList && dataList.length && dataList[selectedIndex]}
          closeFeedback={closeFeedback}
        />
      )}
    </div>
  );
}
