import { ADD_CITY, HIDE_ERROR, REMOVE_CITY, SET_CITY, SHOW_ERROR, FAV_CITY } from '../actions/types';

export const rootReducer = (state, action) => {
  switch (action.type) {
    case ADD_CITY:
      return {
        ...state,
        cities: [
          ...state.cities,
          {
            id: action.payload.id,
            name: action.payload.name,
            country: action.payload.sys.country,
            lat: action.payload.coord.lat,
            lon: action.payload.coord.lon,
            fav: false,
          }
        ],
      };
    case REMOVE_CITY:
      return {
        ...state,
        cities: state.cities.filter(city => parseInt(city.id) !== parseInt(action.payload)),
      };
    case FAV_CITY:
      return {
        ...state,
        cities: state.cities.map(city => parseInt(city.id) === parseInt(action.payload)
          ? { ...city, fav: !city.fav }
          : city),
      };
    case SHOW_ERROR:
      return {
        ...state,
        error: true,
      };
    case HIDE_ERROR:
      return {
        ...state,
        error: false,
      };
    case SET_CITY:
      return {
        ...state,
        cityId: action.payload,
      };
    default:
      return state;
  }
};