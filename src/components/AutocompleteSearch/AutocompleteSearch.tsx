import React from "react";
import axios from "axios";

// MUI
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  autocomplete: {
    color: "#fff",
    background: "#fff",
  },
}));

interface PlaceType {
  id: number;
  lat: number;
  lon: number;
  name: string;
  region: string;
  url: string;
}

type AutocompleteSearchProps = {
  inputValue: string;
  setInputValue: Function;
};

/**
 * Component used to connect to weather api and suggest search options
 */
const AutocompleteSearch = ({
  inputValue,
  setInputValue,
}: AutocompleteSearchProps) => {
  const classes = useStyles();
  const [value, setValue] = React.useState<PlaceType | null>(null);
  const [options, setOptions] = React.useState<PlaceType[]>([]);

  const getPlacesURL = (query: string) =>
    `http://api.weatherapi.com/v1/search.json?key=adb70c0326af47ca874205610211506&q=${query}`;

  const fetchPlaces = async (query: string, setterFn: Function) => {
    try {
      const url = getPlacesURL(query);
      const { data } = await axios.get(url);
      setterFn(data);
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    let active = true;

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetchPlaces(inputValue, setOptions);

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch]);

  return (
    <Autocomplete
      id="google-map-demo"
      className={classes.autocomplete}
      style={{ width: 300 }}
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.url
      }
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={value}
      onChange={(event: any, newValue: PlaceType | null) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
      }}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search for location"
          variant="outlined"
          fullWidth
        />
      )}
      renderOption={(option) => {
        const { name } = option;

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                {name}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
};

export default AutocompleteSearch;
