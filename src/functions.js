import { OWM_API_KEY } from './consts';

export const loadCities = () => {
  try {
    const cities = JSON.parse(localStorage.getItem('cities'));
    return null !== cities ? cities : [];
  } catch {
    return [];
  }
};

export const saveCities = cities => {
  try {
    localStorage.setItem('cities', JSON.stringify(cities));
  } catch {
  }
};

export const dtToDateTime = (dt, offset) => {
  const localOffset = (new Date().getTimezoneOffset()) * 60;
  const date = new Date((dt + offset + localOffset) * 1000);
  return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) + ', ' + date.toLocaleDateString([], { day: 'numeric', month: 'short' });
};

export const dtToDate = (dt, offset) => {
  const localOffset = (new Date().getTimezoneOffset()) * 60;
  const date = new Date((dt + offset + localOffset) * 1000);
  return date.toLocaleDateString([], { weekday: 'short', day: 'numeric', month: 'short' });
};

export const getCityByName = async name => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${OWM_API_KEY}`);
  const data = await response.json();
  return data;
}

export const getCityByCoords = async (lat, lon) => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${OWM_API_KEY}`);
  const data = await response.json();
  return data;
}

export const getWeather = async city => {
  const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.lat}&lon=${city.lon}&appid=${OWM_API_KEY}&units=metric`);
  const data = await response.json();
  return data;
};

export const searchCityByName = async name => {
  const response = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${name}&limit=5&appid=${OWM_API_KEY}`);
  const data = await response.json();
  return data;
}
