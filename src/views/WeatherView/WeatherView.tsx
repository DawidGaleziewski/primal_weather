import React, {useEffect} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';

// Types 
import {RootState} from '@Redux/configureStore';

// Components
import LineChart from '@Components/LineChart/LineChart';

// MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

// Redux actions
import {fetchData} from '@Redux/features/selectedRegionData/selectedRegionData';

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

    const selectedRegionForecast = useSelector((state: RootStateOrAny) => state.selectedRegionData.data.forecast)

    console.log('selectedRegionForecast ', selectedRegionForecast)
    
    useEffect(()=> {
        dispatch(fetchData({query: 'test', days: 2}))
    }, [])

    return <main className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
              <LineChart dataset={[
                {
                x: 0,
                y: 10
                },
                {
                x: 1,
                y: 10.626424306148245
                },
                {
                x: 2,
                y: 11.251132598502032
                },
                {
                x: 3,
                y: 11.472340041487
                },
                {
                x: 4,
                y: 12.541960721257741
                },
                {
                x: 5,
                y: 13.409388285083782
                },
                {
                x: 6,
                y: 13.696762913930264
                },
                {
                x: 7,
                y: 13.239849317030375
                },
                {
                x: 8,
                y: 12.384457222768686
                },
                {
                x: 9,
                y: 12.49806724177162
                },
                {
                x: 10,
                y: 12.257379694479067
                },
                {
                x: 11,
                y: 12.319980746257588
                },
                {
                x: 12,
                y: 12.142694244863474
                },
                {
                x: 13,
                y: 12.98216989305174
                },
                {
                x: 14,
                y: 13.090638699036544
                },
                {
                x: 15,
                y: 13.781725731512406
                },
                {
                x: 16,
                y: 13.28425754320654
                },
                {
                x: 17,
                y: 13.303996287691142
                },
                {
                x: 18,
                y: 13.482390529133545
                },
                {
                x: 19,
                y: 12.993141516627496
                },
                {
                x: 20,
                y: 12.997439070406923
                }
            ]}/>
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