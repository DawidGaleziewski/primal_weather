import React, {useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';

// Redux actions
import {fetchData} from '@Redux/features/selectedRegionData/selectedRegionData';

const WeatherView = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(fetchData({query: 'test', days: 2}))
    }, [])

    return <div>
        Weather view
    </div>
}

export default WeatherView;