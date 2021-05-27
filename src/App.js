import "./styles.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import SearchAppBar from "./SearchAppBar";
import FullWidthGrid from "./FullWidthGrid";
import SmallChips from "./HeaderCard";
import { Grid } from "@material-ui/core";
import DashboardSidebar from "./DashBoardSideBar";
import FooterCard from "./FooterCard";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
const theme = createMuiTheme({
  palette: {
    common: {
      black: "rgba(0, 0, 0, 1)",
      white: "#fff"
    },
    background: {
      paper: "#fff",
      default: "#fafafa"
    },
    primary: {
      light: "#7986cb",
      main: "rgba(107, 164, 58, 1)",
      dark: "#303f9f",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ff4081",
      main: "rgba(9, 85, 64, 1)",
      dark: "#c51162",
      contrastText: "#fff"
    },
    error: {
      light: "#e57373",
      main: "#f44336",
      dark: "#d32f2f",
      contrastText: "#fff"
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.54)",
      disabled: "rgba(0, 0, 0, 0.38)",
      hint: "rgba(0, 0, 0, 0.38)"
    }
  },
  reviewImage: {
    display: "flex"
  }
});



function setV(uuid){
  localStorage.setItem("uuid",uuid);
}


function Comp(){
  let { uuid } = useParams();
  uuid && setV(uuid);
  return (
    <div className="App">
    <SearchAppBar />
    <SmallChips />
    <Grid container spacing={3}>
      {/* <Grid item md={3}>
        <DashboardSidebar />
      </Grid>
      <Grid item md={9}>
      </Grid> */}
      <FullWidthGrid />
    </Grid>
    <FooterCard />
  </div>
  )
}
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route path="/:uuid">
            <Comp />
          </Route>
          <Route path="/">
            <Comp />
          </Route>
        </Switch>
        </Router>
    </ThemeProvider>
  );
}
