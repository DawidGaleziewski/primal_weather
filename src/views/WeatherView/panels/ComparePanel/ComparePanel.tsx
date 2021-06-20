import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

// Redux actions
import {fetchData} from '@Redux/features/regionsToCompare/regionsToCompare';

// MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';

// Selectors
import {selectForecastChartTemperatureData, selectForecastChartHumidityData, selectCompareTableData} from '@Redux/selectors/weather';

// Utils
import {formatCityName} from '@Utils/namesFormat';


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
    table: {
        minWidth: 650,
      },
  }),
);

type ForecastSelectedProps = {
    city: string | undefined
}
const ComparePanel = ({city}: ForecastSelectedProps) => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchData({query: 'gdansk-poland', days: 2}))
    }, [city])

    const classes = useStyles();
    console.log('useSelector(state => state)', useSelector(state => state))
    const compareTableData = selectCompareTableData(useSelector(state => state))
    console.log('compareTableData',compareTableData)
    // const selectedRegionForecastTemp = selectForecastChartTemperatureData((useSelector(state => state)));
    // const selectedRegionForecastHumidity = selectForecastChartHumidityData(useSelector(state => state))

    interface Data {
        time: string;
        temp_c_city_a: number;
        temp_c_city_b: number;
        temp_diff: number;
      }
      
      function createData(
        time: string,
        temp_c_city_a: number,
        temp_c_city_b: number,
        temp_diff: number,
      ): Data {
        return { time, temp_c_city_a, temp_c_city_b, temp_diff };
      }


    // const rows = [
    //     compareTableData.map(({name,}) => createData)
    //     createData('Cupcake', 305, 3.7, 67, 4.3),
    //     createData('Donut', 452, 25.0, 51, 4.9),
    //     createData('Eclair', 262, 16.0, 24, 6.0),
    //     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    //     createData('Gingerbread', 356, 16.0, 49, 3.9),
    //     createData('Honeycomb', 408, 3.2, 87, 6.5),
    //     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    //     createData('Jelly Bean', 375, 0.0, 94, 0.0),
    //     createData('KitKat', 518, 26.0, 65, 7.0),
    //     createData('Lollipop', 392, 0.2, 98, 0.0),
    //     createData('Marshmallow', 318, 0, 81, 2.0),
    //     createData('Nougat', 360, 19.0, 9, 37.0),
    //     createData('Oreo', 437, 18.0, 63, 4.0),
    //   ];
      


    return (<article className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                <Typography variant="h4" component="h2">
                    Compare {city && formatCityName(city)} with other cities
                </Typography>
                </Paper>
            </Grid>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <Typography variant="h6" component="h3">Temperature (C)</Typography>
                    <TableContainer component={Paper}>
                    <Table className={classes.table} size="small" aria-label="a dense table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Timestamp</TableCell>
                            <TableCell align="right">{city && formatCityName(city)} temperature</TableCell>
                            <TableCell align="right">Other city temperature</TableCell>
                            <TableCell align="right">Diffrance</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {compareTableData.map((row) => (
                            <TableRow key={row.time}>
                            <TableCell component="th" scope="row">
                                {row.time}
                            </TableCell>
                            <TableCell align="right">{row.temp_c_city_a}</TableCell>
                            <TableCell align="right">{row.temp_c_city_b}</TableCell>
                            <TableCell align="right">{row.temp_diff}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                    </TableContainer>
                </Paper>
            </Grid>
        </Grid>
  </article>)
}

export default ComparePanel;