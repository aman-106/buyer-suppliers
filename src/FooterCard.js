import {
  Box,
  Button,
  Grid,
  Card,
  CardHeader,
  Divider,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

import Rating from "@material-ui/lab/Rating";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import { useLoggedUserState } from "./helper";

const useStyles = makeStyles((theme) => ({
  topcard: {
    padding: "12px",
    borderRadius: 8,
    margin: "24px 16px"
  }
}));

const Suppliers = [
  {
    id: "1",
    name: "Brooklyn Brew Shop, LLC",
    imageUrl: "/avatar_6.png",
    updatedAt: "Updated 2 hours ago"
  },
  {
    id: "2",
    name: "Roller Service Corporation",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: "Updated 3 hours ago"
  },
  {
    id: "3",
    name: "Voss Usa, Inc.",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: "Updated 2 days ago"
  },
  {
    id: "4",
    name: "Edsal Machine Products, Inc",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: "Updated 6 hours ago"
  },
  {
    id: "5",
    name: "TOUGHZAP INC.",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: "Updated 6 days ago"
  }
];
const Buyers = [
  {
    id: "1",
    name: "D & R Engineering",
    imageUrl: "/avatar_6.png",
    updatedAt: "Updated 2 hours ago"
  },
  {
    id: "2",
    name: "Aboytes Manufacturing",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: "Updated 3 hours ago"
  },
  {
    id: "3",
    name: "H.E.M. Industries Incorporated.",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: "Updated 2 days ago"
  },
  {
    id: "4",
    name: "Schindler Elevator Corporation",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: "Updated 6 hours ago"
  },
  {
    id: "5",
    name: "Herbert Wolf Cor",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: "Updated 6 days ago"
  }
];
const Industries = [
  {
    id: "1",
    name: "Staff USA Inc.",
    imageUrl: "/avatar_6.png",
    updatedAt: "Updated 2 hours ago"
  },
  {
    id: "2",
    name: "Allstar Marketing Group, LLC",
    imageUrl: "/static/images/products/product_2.png",
    updatedAt: "Updated 3 hours ago"
  },
  {
    id: "3",
    name: "Fashion Avenue Knits Inc.",
    imageUrl: "/static/images/products/product_3.png",
    updatedAt: "Updated 2 days ago"
  },
  {
    id: "4",
    name: "Lucent Jewelers, Inc.",
    imageUrl: "/static/images/products/product_4.png",
    updatedAt: "Updated 6 hours ago"
  },
  {
    id: "5",
    name: "Kikkerland Design, Inc.",
    imageUrl: "/static/images/products/product_5.png",
    updatedAt: "Updated 6 days ago"
  }
];

export default function FooterCard() {
  const classes = useStyles();
  const logged = useLoggedUserState();
  return (
    <Grid container spacing={3}>
      <Grid item sm={4}>
        <Card className={classes.topcard}>
          <CardHeader
            subtitle={`${Suppliers.length} in total`}
            title="Top 5 Suppliers"
          />
          <Divider />
          <List>
            {Suppliers.map((product, i) => (
              <ListItem divider={i < Suppliers.length - 1} key={product.id}>
                <ListItemText
                  primary={product.name}
                  secondary={product.updatedAt}
                />
                <Rating
                  name="customized-empty"
                  defaultValue={5}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRightIcon />}
              size="small"
              variant="text"
            >
              View all
            </Button>
          </Box>
        </Card>
      </Grid>
      <Grid item sm={4}>
        <Card className={classes.topcard}>
          <CardHeader
            subtitle={`${Buyers.length} in total`}
            title="Top 5 Buyers"
          />
          <Divider />
          <List>
            {Buyers.map((product, i) => (
              <ListItem divider={i < Buyers.length - 1} key={product.id}>
                <ListItemText
                  primary={product.name}
                  secondary={product.updatedAt}
                />
                <Rating
                  name="customized-empty"
                  defaultValue={5}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRightIcon />}
              size="small"
              variant="text"
            >
              View all
            </Button>
          </Box>
        </Card>
      </Grid>
      {logged ? <Grid item sm={4}>
        <Card className={classes.topcard}>
          <CardHeader
            subtitle={`${Industries.length} in total`}
            title="Suppliers Near your location"
          />
          <Divider />
           <List>
            {Industries.map((product, i) => (
              <ListItem divider={i < Industries.length - 1} key={product.id}>
                <ListItemText
                  primary={product.name}
                  secondary={product.updatedAt}
                />
                <Rating
                  name="customized-empty"
                  defaultValue={5}
                  precision={0.5}
                  emptyIcon={<StarBorderIcon fontSize="inherit" />}
                />
              </ListItem>
            ))}
          </List>
          <Divider />
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              p: 2
            }}
          >
            <Button
              color="primary"
              endIcon={<ArrowRightIcon />}
              size="small"
              variant="text"
            >
              View all
            </Button>
          </Box>
        </Card>
          </Grid> : "" }
    </Grid>
  );
}
