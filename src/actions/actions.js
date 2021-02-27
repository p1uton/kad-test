import { getCityByCoords, getCityByName } from '../functions';
import { ADD_CITY, HIDE_ERROR, REMOVE_CITY, SET_CITY, SHOW_ERROR, FAV_CITY } from './types';

export const addCityByNameAction = name => {
  return async dispatch => {
    try {
      const city = await getCityByName(name);
      if ('id' in city) {
        dispatch(addCityAction(city));
        dispatch(setCityAction(city.id));
      } else {
        dispatch(showErrorAction());
      }
    } catch (error) {
      dispatch(showErrorAction());
    }
  }
};

export const addCityByCoordsAction = (lat, lon) => {
  return async dispatch => {
    try {
      const city = await getCityByCoords(lat, lon);
      if ('id' in city) {
        dispatch(addCityAction(city));
        dispatch(setCityAction(city.id));
      } else {
        dispatch(showErrorAction());
      }
    } catch (error) {
      dispatch(showErrorAction());
    }
  }
};

export const addCityAction = city => {
  return {
    type: ADD_CITY,
    payload: city,
  };
};

export const removeCityAction = id => {
  return {
    type: REMOVE_CITY,
    payload: id,
  };
};

export const favCityAction = id => {
  return {
    type: FAV_CITY,
    payload: id,
  };
};

export const showErrorAction = () => {
  return {
    type: SHOW_ERROR,
  };
}

export const hideErrorAction = () => {
  return {
    type: HIDE_ERROR,
  };
};

export const setCityAction = id => {
  return {
    type: SET_CITY,
    payload: id,
  };
};