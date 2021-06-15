import React from 'react';
import axios from 'axios';

// MUI
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


function loadScript(src: string, position: HTMLElement | null, id: string) {
  if (!position) {
    return;
  }

  const script = document.createElement('script');
  script.setAttribute('async', '');
  script.setAttribute('id', id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

const useStyles = makeStyles((theme) => ({
  icon: {
    color: theme.palette.text.secondary,
    marginRight: theme.spacing(2),
  },
  autocomplete: {
    color: '#fff',
    background: '#fff'
  }
}));

interface PlaceType {
  title: string
}


const AutocompleteSearch = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState<PlaceType | null>(null);
  const [inputValue, setInputValue] = React.useState('');
  const [options, setOptions] = React.useState<PlaceType[]>([]);

  const getPlacesURL = (query: string) => `https://places.ls.hereapi.com/places/v1/autosuggest?at=40.74917,-73.98529&q=${query}&apiKey=h-STCB9rBwNgoyAocUaIt1-27J3d4NF2EURK0dfB93A`

  const fetchPlaces = async (query: string, setterFn: Function) => {
    try{
      const url = getPlacesURL(query);
      const {data: {results}} = await axios.get(url);
      setterFn(results)
    } catch(error){
      console.log(error);
    }
    
  }

  React.useEffect(() => {
    let active = true;

    if (inputValue === '') {
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
      getOptionLabel={(option) => (typeof option === 'string' ? option : option.title)}
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
        <TextField {...params} label="Search for location" variant="outlined" fullWidth />
      )}
      renderOption={(option) => {

        const {title} = option;

        return (
          <Grid container alignItems="center">
            <Grid item>
              <LocationOnIcon className={classes.icon} />
            </Grid>
            <Grid item xs>
              <Typography variant="body2" color="textSecondary">
                {title}
              </Typography>
            </Grid>
          </Grid>
        );
      }}
    />
  );
}

export default AutocompleteSearch;