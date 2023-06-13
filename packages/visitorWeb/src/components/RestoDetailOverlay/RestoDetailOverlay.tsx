import React from "react";
import ScrollOverlay from '../ScrollOverlay/ScrollOverlay';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Rating from "@src/components/RestoCard/Rating/Rating";
import PlaceIcon from '@mui/icons-material/Place';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { NavigateTo } from "@src/utils/NavigateTo";
import styles from "./RestoDetailOverlay.module.scss";

import {
  IOpeningHours,
  IRestaurantFrontEnd
} from '../../../../shared/models/restaurantInterfaces';
import {useNavigate} from "react-router-dom";

const PageBtn = () => {
  return createTheme({
    typography: {
      button: {
        fontFamily: "Montserrat",
        textTransform: "none",
        fontSize: "1.13rem",
        fontWeight: "500",
        padding: "0"
      },
    },
    palette: {
      primary: {
        main: "#6d071a",
        contrastText: "#ffffff",
      },
      secondary: {
        main: "#094067",
        contrastText: "#ffffff",
      },
    },
    shape: {
      borderRadius: 5,
    },
  });
};

interface IRestaurantDetailProps {
  restaurant: IRestaurantFrontEnd;
  onClose: () => void;
}

const RestoDetailOverlay = (props: IRestaurantDetailProps) => {
  const navigate = useNavigate();
  const {pictures, name, rating, ratingCount, location, description, categories, openingHours, phoneNumber, website } = props.restaurant;
  const { streetName, streetNumber, postalCode, city, country } = location;
  const address = `${streetName} ${streetNumber}, ${postalCode} ${city}, ${country}`;

  if (!props.restaurant) {
    return null;
  }

  return (
    <ScrollOverlay isOpen={true} onClose={props.onClose}>
        <Grid container>
          <Grid item xs={3} className={styles.GridItemImage}>
            <div>
              {pictures.length > 0 && (
                <img src={pictures[0]} alt={name} className={styles.ImageDimensions} />
              )}
            </div>
            {openingHours.length > 0 ? (<div>
              <Typography variant="subtitle1">Opening Hours:</Typography>
              {openingHours.map((hours, index) => (
                <Typography variant="body1" key={index}>
                  {getFormattedOpeningHours(hours)}
                </Typography>
              ))}
            </div>) : null}
          </Grid>
          <Grid item xs={9} className={styles.GridItem}>
            <div className={styles.FlexParent}>
              <Typography variant="h4" component="h2" className={styles.DishTitle}>
                {name}
              </Typography>
              <Rating restoRating={rating} restoRatingsCount={ratingCount} />
            </div>
            <div className={styles.FlexParent}>
              <PlaceIcon />
              <span className={styles.AddressText}>
                {location.streetNumber} {location.streetName}, {location.city}, {location.postalCode}, {location.country}
              </span>
            </div>
            <div className={styles.FlexParent}>
              <LocalPhoneIcon />
              <span className={styles.AddressText}>
                {phoneNumber}
              </span>
            </div>
            <div className={styles.FlexParent}>
              <LanguageIcon />
              <span className={styles.AddressText}>
                {website}
              </span>
            </div>
            <p className={styles.JustificationPrintExtended}>
              {description}
            </p>
            <div className={styles.BtnPage}>
              <ThemeProvider theme={PageBtn()}>
                <Button
                  className={styles.RestoBtn}
                  variant="contained"
                  onClick={() => NavigateTo("/menu", navigate, {
                    menu: categories,
                    restoName: name,
                    address: address,
                  })}
                >
                  Menu
                </Button>
              </ThemeProvider>
            </div>
          </Grid>
        </Grid>
    </ScrollOverlay>
  );
}

const getFormattedOpeningHours = (hours: IOpeningHours) => {
  const { open, close, day } = hours;
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const formattedDay = daysOfWeek[day];

  if (open && close) {
    const formattedTime = `${open} - ${close}`;
    return `${formattedDay}: ${formattedTime}`;
  } else {
    return `${formattedDay}: Closed`;
  }
};

export default RestoDetailOverlay;
