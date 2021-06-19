import React, {useEffect} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

// Components
import LineChart from '@Components/LineChart/LineChart';

// MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Redux actions
import {fetchData} from '@Redux/features/selectedRegionData/selectedRegionData';

import {selectForecastChartTemperatureData} from '@Redux/selectors/weather';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
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

    const selectedRegionForecastTemp = selectForecastChartTemperatureData((useSelector(state => state)));

    console.log('selectedRegionForecast ', selectedRegionForecastTemp)
    
    useEffect(()=> {
        dispatch(fetchData({query: 'test', days: 2}))
    }, [])

    return <main className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <LineChart dataset={selectedRegionForecastTemp}/>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>xs=12 sm=6</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>xs=6 sm=3</Paper>
        </Grid>
      </Grid>
    </main>
}

export default WeatherView;