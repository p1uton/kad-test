import React from 'react';
import { useSelector } from 'react-redux';
import { CitiesList } from './components/CitiesList';
import { CityContainer } from './components/CityContainer';
import { AppProvider, Page } from '@shopify/polaris';

export const App = () => {
  const cityId = useSelector(state => state.cityId);

  return (
    <AppProvider>
      <Page>
        {
          null !== cityId
            ? <CityContainer />
            : <CitiesList />
        }
      </Page>
    </AppProvider>
  );
};