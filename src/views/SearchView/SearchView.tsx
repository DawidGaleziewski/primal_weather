/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from "react";
import { css, jsx } from "@emotion/react";
import { Link } from "react-router-dom";

// Components
import SearchWrapper from "@Components/SearchWrapper/SearchWrapper";

// MUI
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import AutocompleteSearch from "@Components/AutocompleteSearch/AutocompleteSearch";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    color: "#43444d",
    background: "#fff",
  },
  form: {
    display: "flex",
    justifyContent: "center",
  },
}));

const HomeView = () => {
  const classes = useStyles();
  const [selectedRegion, setSelectedRegion] = useState("");

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Weather app
          </Typography>
        </Toolbar>
      </AppBar>

      <SearchWrapper>
        <form className={classes.form}>
          <AutocompleteSearch
            setInputValue={setSelectedRegion}
            inputValue={selectedRegion}
          />
          <Button
            disabled={selectedRegion.length < 1}
            component={Link}
            to={`/weather/${selectedRegion}`}
            variant="contained"
            color="primary"
          >
            Search
          </Button>
        </form>
      </SearchWrapper>
    </div>
  );
};

export default HomeView;
