import React, { useEffect, useCallback } from "react";
import { InputForAddPoint } from "./../Features/InputForAddPoint";
import { SimpleMap } from "../Features/SimpleMap/Templates";
import { Points } from "../Features/Points";
import "./style.sass";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../Features/Model/actions";
import { CoordinateType } from "../../services/API/API";
import { AppStateType } from "../Features/Model/store";
import { getRandomNumber } from "./../Features/RandomNumber/index";
export const Page = () => {
  const dispatch = useDispatch();
  const geolocation = useSelector((state: AppStateType) => state.MapReducer.geolocation);

  const onSetGeoloccation = useCallback(
    (geolocation: CoordinateType) => {
      dispatch(Actions.getGeolocation(geolocation));
    },
    [dispatch]
  );

  useEffect(() => {
    const success = (position: any) => {
      let lat = position.coords.latitude;
      let lng = position.coords.longitude;
      onSetGeoloccation({ lat, lng });
    }

    const error = () => {
      let lat = 0;
      let lng = getRandomNumber(0, 180)
      onSetGeoloccation({ lat, lng });
    }

    if (!navigator.geolocation) alert("Geolocation is not supported by your browser");
    else navigator.geolocation.getCurrentPosition(success, error);
    
  }, [onSetGeoloccation]);

  return (
    geolocation && (
      <div className='page_points-map'>
        <div className='points'>
          <div className='add-point'>
            <InputForAddPoint />
          </div>
          <div className='list-point'>
            <Points />
          </div>
        </div>
        <div className='map'>
          <SimpleMap geolocation={geolocation}/>
        </div>
      </div>
    )
  );
};
