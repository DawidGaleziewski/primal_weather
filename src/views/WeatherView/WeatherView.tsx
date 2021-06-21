import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Panels
import ForecastSelected from "./panels/ForecastSelected/ForecastSelected";
import ComparePanel from "./panels/ComparePanel/ComparePanel";

// Views
import LoadingView from "@Views/LoadingView/LoadingView";

// Utils
import { LOADING, SUCCESS, REJECTED, Status } from "@Redux/networkStatus";

/**
 * View displaying data related to slected location
 */
const WeatherView = () => {
  const history = useHistory();
  const { city } = useParams<{ city?: string }>();
  const networkStatus = useSelector(
    (state: any) => state.selectedRegionData.status
  );

  const conditionalRenderView = (networkStatus: Status) => {
    switch (networkStatus) {
      case SUCCESS:
        return null;
      case LOADING:
        return <LoadingView />;
      case REJECTED:
        history.push("/error-no-city-found");
        return null;
      default:
        return null;
    }
  };

  return (
    <Fragment>
      <ForecastSelected city={city} />
      <ComparePanel city={city} />
      {conditionalRenderView(networkStatus)}
    </Fragment>
  );
};

export default WeatherView;
