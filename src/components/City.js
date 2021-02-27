import React from 'react';
import { dtToDateTime } from '../functions';
import { DataTable, DisplayText } from '@shopify/polaris';
import { dtToDate } from '../functions';

export const City = ({ weather }) => {

  const rows = weather.daily.map(dayWeather => {
    return [
      dtToDate(dayWeather.dt, weather.timezone_offset),
      Math.round(dayWeather.temp.day) + '°C /' + Math.round(dayWeather.temp.night) + '°C',
      dayWeather.weather[0].main,
      Math.round(dayWeather.wind_speed) + 'м/с',
    ];
  });

  return (
    <div>
      <DisplayText size="medium">{dtToDateTime(weather.current.dt, weather.timezone_offset)}</DisplayText>
      <DisplayText size="small">{Math.round(weather.current.temp)}°C, {weather.current.weather[0].main}, {Math.round(weather.current.wind_speed)} м/с</DisplayText>
      <DataTable
        columnContentTypes={[
          'text',
          'text',
          'text',
          'text',
        ]}
        headings={[
          'Дата',
          'Температура',
          'Облачность',
          'Ветер',
        ]}
        rows={rows}
      />
    </div>
  );
};