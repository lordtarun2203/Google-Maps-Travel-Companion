import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import Rating from "@mui/material/Rating";

import useStyles from "./styles";

const PlaceDetails = ({ place, selected, refProp }) => {
  const classes = useStyles();

  if (selected)
    refProp?.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://img.freepik.com/premium-photo/table-top-background-restaurant-blur_872147-18291.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="Space-between">
          <Rating value={Number(place.rating)} readOnly />
          <Typography gutterBottom variant="subtitle1">
            out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="Space-between">
          <Typography variant="body2">Price </Typography>
          <Typography gutterBottom variant="body2">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="Space-between">
          <Typography variant="body2">Ranking </Typography>
          <Box ml={2}>
            <Typography
              sx={{ ml: 2 }}
              gutterBottom
              variant="body2"
              style={{ textAlign: "right" }}
            >
              {place.ranking}
            </Typography>
          </Box>
        </Box>
        {place?.awards?.map((award) => (
          <Box
            display="flex"
            justifyContent="space-between"
            my={1}
            alignItems="center"
          >
            <img src={award.images.small} />
            <Typography variant="subtitle2" color="textSecondary">
              {award.display_name}
            </Typography>
          </Box>
        ))}
        {place?.cuisine?.map(({ name }) => (
          <Chip key={name} size="small" label={name} className={classes.chip} />
        ))}
        {place?.address && (
          <Box
            display="flex"
            justifyContent="flex-start"
            className={classes.subtitle}
          >
            <Box pr={2}>
              {" "}
              {/* Add padding to the right of the icon */}
              <LocationOnIcon fontSize="small" color="action" />
            </Box>
            <Typography
              variant="caption"
              color="textSecondary"
              style={{ textAlign: "right" }}
            >
              {place.address}
            </Typography>
          </Box>
        )}

        {place.phone && (
          <Typography
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
            style={{ textAlign: "right" }}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.web_url, "_blank")}
        >
          Trip Advisor
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => window.open(place.website, "_blank")}
        >
          Website
        </Button>
      </CardActions>
    </Card>
  );
};

export default PlaceDetails;
