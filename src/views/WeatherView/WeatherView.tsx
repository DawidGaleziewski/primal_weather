import React, { Fragment} from 'react';
import { useDispatch, useSelector, RootStateOrAny } from 'react-redux';
import {
  useParams
} from "react-router-dom";
import { useHistory } from "react-router-dom";

// Panels
import ForecastSelected from './panels/ForecastSelected/ForecastSelected';
import ComparePanel from './panels/ComparePanel/ComparePanel';

// Views 
import LoadingView from '@Views/LoadingView/LoadingView';

// MUI
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Utils
import {LOADING, SUCCESS, REJECTED, Status} from '@Redux/networkStatus';


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
    }
  }),
);

const WeatherView = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const {city} = useParams<{city?: string}>();
    const networkStatus = useSelector((state: any)=> state.selectedRegionData.status)

    const conditionalRenderView = (networkStatus: Status) => {
      switch(networkStatus){
        case SUCCESS:
          return null;
        case LOADING:
          return <LoadingView/>;
        case REJECTED:
          history.push('/error');
          return null
        default:
          return null; 
      }
    }

    
    return (<Fragment>
      <ForecastSelected city={city} />
      <ComparePanel city={city} />
      {conditionalRenderView(networkStatus)}
    </Fragment>)
}

export default WeatherView;