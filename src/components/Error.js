import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { hideErrorAction } from '../actions/actions';
import { Banner, Layout } from '@shopify/polaris';

export const Error = () => {
  const dispatch = useDispatch();

  const error = useSelector(state => state.error);

  const toggleActive = () => {
    dispatch(hideErrorAction());
  };

  if (!error) {
    return null;
  }

  return (
    <Layout.Section>
      <Banner
        title="Город не найден"
        status="critical"
        onDismiss={toggleActive}
      >
      </Banner>
    </Layout.Section>
  );
};