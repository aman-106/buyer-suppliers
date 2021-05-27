import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import DivisionList from "./DivisionList";
import Login from "./Login";
import Button from "@material-ui/core/Button";
import { MenuItem, TextField } from "@material-ui/core";
import clsx from "clsx";
import axios from "axios";
import { baseurl, useLoggedUserState } from "./helper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(3),
    padding: "12px",
    borderRadius: 8,
    margin: "16px 16px"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  SearchForm: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  searchButton: {
    display: "flex",
    width: "fit-content"
  }
}));

function useGetCatgory() {
  const [category, setCatgory] = useState([]);
  useEffect(() => getCategory(), []);

  async function getCategory() {
    try {
      const response = await axios.get(baseurl + "get_category");
      setCatgory(response.data && response.data.category_list);
    } catch (e) {
      setCatgory([]);
    }
  }

  console.log(category || []);

  return category || [];
}

const defaultState = {
  type: "",
  category: ""
};

function SearchForm(props) {
  const { onSearch } = props;
  const [state, updateState] = useState(defaultState);
  function handleChange(key) {
    return function (event) {
      const value = event.target.value;
      updateState({
        ...state,
        [key]: value
      });
    };
  }
  const classes = useStyles();
  const category = useGetCatgory();
  return (
    <Paper className={clsx(classes.paper, classes.SearchForm)}>
      <TextField select label="Type" onChange={handleChange("type")}>
        <MenuItem value="buyer">Buyer </MenuItem>
        <MenuItem value="supplier">Supplier </MenuItem>
      </TextField>
      <TextField select label="Category" onChange={handleChange("category")}>
        {/* <MenuItem>A1 </MenuItem>
        <MenuItem>s1 </MenuItem> */}
        {category.map(function (elem) {
          return <MenuItem value={elem}> {elem}</MenuItem>;
        })}
      </TextField>
      <Button
        variant="contained"
        className={classes.searchButton}
        color="secondary"
        onClick={() => {
          onSearch && onSearch(state);
        }}
      >
        Search
      </Button>
    </Paper>
  );
}

export default function FullWidthGrid() {
  const classes = useStyles();
  const [showLogin, handleShowLogin] = useState(false);
  const logged = useLoggedUserState();
  const [searched, setSearch] = useState(null);

  async function handleSearch(type, category) {
    try {
      const path =
        type === "buyer"
          ? "getBuyerBasedOnCategory/"
          : "getSupplierBasedOnCategory/";
      const response = await axios({
        method: "post",
        url: baseurl + path,
        data: {
          industry_category: category
        }
      });
      setSearch((response.data && response.data.entity_list) || []);
    } catch (e) {
      setSearch([]);
    }
  }
  return logged ? (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.paper}>
            <DivisionList />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={3}>
          {/* <Paper className={classes.paper}>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                handleShowLogin(true);
              }}
            >
              Login
            </Button>
          </Paper> */}
          {/* {showLogin && <Login />} */}
          {/* <Paper className={classes.paper}>login</Paper> */}
          <SearchForm
            onSearch={({ type, category }) => {
              handleSearch(type, category);
            }}
          />
        </Grid>
      </Grid>
    </div>
  ) : (
    <div className={classes.root}>
      <Grid container spacing={3}>

      <Grid item xs={searched ? 3 : 9} sm={12}>
          {/* <Paper className={classes.paper}>side bar</Paper> */}
          <SearchForm
            onSearch={({ type, category }) => {
              handleSearch(type, category);
            }}
          />
          {/* <Paper className={classes.paper}>login</Paper> */}
        </Grid>

        {searched && (
          <Grid item xs={12} sm={12}>
            <Paper className={classes.paper}>
              <DivisionList list={searched || []} />
            </Paper>
          </Grid>
        )}

      </Grid>
    </div>
  );
}
