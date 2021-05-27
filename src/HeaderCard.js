import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";
import DoneIcon from "@material-ui/icons/Done";
import { Card } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  card: {
      margin: theme.spacing(2),
      padding: theme.spacing(2),
  }
}));

export default function SmallChips() {
  const classes = useStyles();

  const handleDelete = () => {
    console.info("You clicked the delete icon.");
  };

  const handleClick = () => {
    console.info("You clicked the Chip.");
  };

  return (
    <Card className={classes.card}>
    <div className={classes.root}>
      <Chip
        icon={<FaceIcon />}
        label="All Reviews"
        onDelete={handleDelete}
        color="secondary"
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Business"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Rewards"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Customer service"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Payment Terms"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Quality"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
      <Chip
        avatar={<Avatar>M</Avatar>}
        label="Platform"
        clickable
        color="primary"
        onDelete={handleDelete}
        deleteIcon={<DoneIcon />}
      />
    </div>
    </Card>
  );
}
