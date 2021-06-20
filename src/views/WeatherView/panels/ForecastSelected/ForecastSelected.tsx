import React, { useEffect } from "react";
import dateTime from "date-time";
import { useSelector, useDispatch } from "react-redux";

// MUI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core";

// Redux actions
import { fetchData } from "@Redux/features/selectedRegionData/selectedRegionData";

// Components
import LineChart from "@Components/LineChart/LineChart";

// Selectors
import {
  selectForecastChartTemperatureData,
  selectForecastChartHumidityData,
} from "@Redux/selectors/weather";

// Utils
import { formatCityName } from "@Utils/namesFormat";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: "1600px",
      margin: "2rem auto",
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: "center",
      color: theme.palette.text.secondary,
    },
  })
);

type ForecastSelectedProps = {
  city: string | undefined;
};
const ForecastSelected = ({ city }: ForecastSelectedProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData({ query: city, days: 2 }));
  }, [city, dispatch]);

  const classes = useStyles();
  const selectedRegionForecastTemp = selectForecastChartTemperatureData(
    useSelector((state) => state)
  );
  const selectedRegionForecastHumidity = selectForecastChartHumidityData(
    useSelector((state) => state)
  );

  return (
    <article className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              Weather forecast for {city && formatCityName(city)}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h3">
              Temperature (C)
            </Typography>
            <LineChart
              tickFormatY={(tick) => `${tick}C`}
              tickFormatX={(date) => `${dateTime({ date: new Date(date) })}`}
              dataset={selectedRegionForecastTemp}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
            <Typography variant="h6" component="h3">
              Humidity (%)
            </Typography>
            <LineChart
              tickFormatY={(tick) => `${tick}%`}
              tickFormatX={(date) => `${dateTime({ date: new Date(date) })}`}
              dataset={selectedRegionForecastHumidity}
            />
          </Paper>
        </Grid>
      </Grid>
    </article>
  );
};

export default ForecastSelected;
