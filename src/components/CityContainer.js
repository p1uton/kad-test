import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeCityAction, setCityAction } from '../actions/actions';
import { getWeather } from '../functions';
import { City } from './City';
import { Button, DisplayText, Layout } from '@shopify/polaris';

export const CityContainer = () => {
  const cityId = useSelector(state => state.cityId);

  const city = useSelector(state => state.cities.find(city => parseInt(city.id) === parseInt(cityId)));

  const [weather, setWeather] = useState(null);

  useEffect(() => {
    async function fetchWeather() {
      if (undefined !== city) {
        const weather = await getWeather(city);
        setWeather(weather);
      }
    }
    fetchWeather();
  }, [city]);

  const dispatch = useDispatch();

  const handleRemoveClick = id => {
    dispatch(removeCityAction(id));
    dispatch(setCityAction(null));
  };

  const handleBackClick = () => {
    dispatch(setCityAction(null));
  };

  return (
    <Layout>
      <Layout.Section>
        <div style={{ 'display': 'flex', 'justifyContent': 'space-between', 'alignItems': 'center' }}>
          <Button onClick={handleBackClick}>&larr; К списку городов</Button>
          <Button onClick={() => handleRemoveClick(cityId)}>Удалить город</Button>
        </div>
      </Layout.Section>
      <Layout.Section>
        <DisplayText size="large">{city.name}, {city.country}</DisplayText>
        {null !== weather ? <City weather={weather} /> : <div>Загрузка...</div>}
      </Layout.Section>
    </Layout>
  );
};