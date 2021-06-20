import React, { Fragment, useState } from "react";

// MUI
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TablePagination from "@material-ui/core/TablePagination";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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

type DataTableProps = {
  cityA: string | undefined;
  cityB: string | undefined;
  compareTableData: any[];
};

/**
 * Component used display a table displaying two rows of values comparing temperatures
 */
const CompareTempDataTable = ({
  cityA = "",
  cityB = "",
  compareTableData = [],
}: DataTableProps) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const classes = useStyles();

  return (
    <Fragment>
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
                {cityA && formatCityName(cityA)} temperature
              </TableCell>
              <TableCell align="right">{cityB}</TableCell>
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
    </Fragment>
  );
};

export default CompareTempDataTable;
