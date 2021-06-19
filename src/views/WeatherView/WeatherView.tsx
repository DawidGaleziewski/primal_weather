import React, {useEffect} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import dateTime from 'date-time';
import {
  useParams
} from "react-router-dom";

// Components
import LineChart from '@Components/LineChart/LineChart';

// MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Redux actions
import {fetchData} from '@Redux/features/selectedRegionData/selectedRegionData';

import {selectForecastChartTemperatureData, selectForecastChartHumidityData} from '@Redux/selectors/weather';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      maxWidth: '1600px',
      margin: '2rem auto'
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);

const WeatherView = () => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const {city} = useParams<{city?: string}>();

    const selectedRegionForecastTemp = selectForecastChartTemperatureData((useSelector(state => state)));
    const selectedRegionForecastHumidity = selectForecastChartHumidityData(useSelector(state => state))

    console.log('selectedRegionForecast ', selectedRegionForecastTemp)
    console.log('city', city)
    
    useEffect(()=> {
        dispatch(fetchData({query: city, days: 2}))
    }, [])

    return <main className={classes.root}>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Typography variant="h4" component="h2">
              Weather data visualisation for {city}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
              <Typography variant="h6" component="h3">Temperature (C)</Typography>
              <LineChart tickFormatY={tick=> `${tick}C`} tickFormatX={ date=> `${dateTime({date: new Date(date)})}`} dataset={selectedRegionForecastTemp}/>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={classes.paper}>
          <Typography variant="h6" component="h3">Humidity (%)</Typography>
              <LineChart tickFormatY={tick=> `${tick}%`} tickFormatX={ date=> `${dateTime({date: new Date(date)})}`} dataset={selectedRegionForecastHumidity}/>
          </Paper>
        </Grid>
      </Grid>
    </main>
}

export default WeatherView;