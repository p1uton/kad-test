import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addCityByCoordsAction, setCityAction, favCityAction, removeCityAction } from '../actions/actions';
import { Search } from './Search';
import { Card, ResourceList, ResourceItem, TextStyle, Layout, DisplayText } from '@shopify/polaris';
import { Error } from '../components/Error';

export const CitiesList = () => {
  const cities = useSelector(state => state.cities);

  const dispatch = useDispatch();

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(getLocationSuccess);
    }
  };

  const getLocationSuccess = position => {
    dispatch(addCityByCoordsAction(position.coords.latitude, position.coords.longitude));
  };

  if (0 === cities.length) {
    getLocation();
  }

  const handleClick = id => {
    dispatch(setCityAction(id));
  };

  return (
    <Layout>
      <Layout.Section>
        <DisplayText element="h1">Тестовое задание KAD systems - Weather App</DisplayText>
      </Layout.Section>
      <Layout.Section>
        <Search />
      </Layout.Section>
      <Error />
      <Layout.Section>
        <Card>
          <ResourceList
            items={cities}
            renderItem={city => {
              const shortcutActions = [
                {
                  content: city.fav ? 'Удалить из избранного' : 'В избранное',
                  onAction: () => { dispatch(favCityAction(city.id)); }
                },
                {
                  content: 'Удалить',
                  onAction: () => { dispatch(removeCityAction(city.id)); }
                },
              ];

              return (
                <ResourceItem
                  id={city.id}
                  onClick={() => handleClick(city.id)}
                  shortcutActions={shortcutActions}
                  persistActions
                >
                  <h3>
                    <TextStyle variation="strong">{city.name}</TextStyle>
                  </h3>
                  <div>{city.country}</div>
                </ResourceItem>
              );
            }}
          />
        </Card>
      </Layout.Section>
    </Layout>

  );
};