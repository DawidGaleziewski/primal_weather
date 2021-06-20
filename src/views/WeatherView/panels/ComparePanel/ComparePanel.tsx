import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// Redux actions
import { fetchData } from "@Redux/features/regionsToCompare/regionsToCompare";

// MUI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
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
  const compareTableData = selectCompareTableData(
    useSelector((state) => state)
  );

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

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
            <TableContainer component={Paper}>
              <Table
                className={classes.table}
                size="small"
                aria-label="a dense table"
              >
                <TableHead>
                  <TableRow>
                    <TableCell>Timestamp</TableCell>
                    <TableCell align="right">
                      {city && formatCityName(city)} temperature
                    </TableCell>
                    <TableCell align="right">Gdańsk</TableCell>
                    <TableCell align="right">Diffrance</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {compareTableData
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => (
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
            <TablePagination
              rowsPerPageOptions={[5, 10, 25]}
              component="div"
              count={compareTableData.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </Paper>
        </Grid>
      </Grid>
    </article>
  );
};

export default ComparePanel;
