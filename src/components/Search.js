import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { addCityByNameAction } from '../actions/actions';
import { Button, FormLayout, Form, Autocomplete } from '@shopify/polaris';
import { searchCityByName } from '../functions';

export const Search = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addCityByNameAction(inputValue));
  };

  const [selectedOptions, setSelectedOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const updateText = useCallback(
    async value => {
      setInputValue(value);

      if (!loading) {
        setLoading(true);
      }

      try {
        const cities = await searchCityByName(value);
        if (cities) {
          const newOptions = cities.map(city => {
            return {
              value: city.name + ', ' + city.country,
              label: city.name + ', ' + city.country,
            };
          });
          setOptions(newOptions);
          setLoading(false);
        }
      } catch (error) {
        setLoading(false);
      }

    }, [loading],
  );

  const updateSelection = useCallback(
    selected => {
      dispatch(addCityByNameAction(selected));
    }, [dispatch]
  );

  const textField = (
    <Autocomplete.TextField
      onChange={updateText}
      label="Город"
      value={inputValue}
      placeholder="Введите название города"
      labelHidden
    />
  );

  return (
    <Form onSubmit={handleSubmit}>
      <FormLayout>
        <FormLayout.Group>
          <Autocomplete
            options={options}
            selected={selectedOptions}
            onSelect={updateSelection}
            loading={loading}
            textField={textField}
          />
          <Button onClick={handleSubmit}>Добавить город</Button>
        </FormLayout.Group>
      </FormLayout>
    </Form>
  );
}