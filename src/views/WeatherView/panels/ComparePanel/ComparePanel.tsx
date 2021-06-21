import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { fetchData } from "@Redux/features/regionsToCompare/regionsToCompare";

// Components
import CompareTempDataTable from "@Components/CompareTempDataTable/CompareTempDataTable";

// MUI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

// Selectors
import { selectCompareTableData } from "@Redux/selectors/weather";

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
    table: {
      minWidth: 650,
    },
  })
);

type ForecastSelectedProps = {
  city: string | undefined;
};
const ComparePanel = ({ city }: ForecastSelectedProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData({ query: "gdansk-poland", days: 2 }));
  }, [city, dispatch]);

  const classes = useStyles();
  const selectedRegionForecast = useSelector((state:any) => state.selectedRegionData.data.forecast);
  const compareWithGdanskForecast = useSelector((state:any) => state.regionsToCompare.data.gdansk);

  const compareTableData = selectCompareTableData(selectedRegionForecast, compareWithGdanskForecast)
    

  return (
    <article className={classes.root}>
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
            <Typography variant="h6" component="h3">
              Temperature (&deg;C)
            </Typography>
            <CompareTempDataTable
              cityA={city}
              cityB={"Gdańsk"}
              compareTableData={compareTableData}
            />
          </Paper>
        </Grid>
      </Grid>
    </article>
  );
};

export default ComparePanel;
