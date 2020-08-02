import React, { useState, useCallback, FormEvent } from 'react';
import { api } from '../../services/api';

import { Container, Form, Content, Card, Temperature } from './styles';

interface InputProps {
  city: string;
  date: string;
  description: string;
  temp: number;
  time: string;
}

const Dashboard: React.FC = () => {
  const [newCity, setNewCity] = useState('');
  const [cities, setCities] = useState<InputProps[]>([]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      setNewCity('');

      const response = await api.get(
        `weather?format=json-cors&key=44b85c95&city_name=${newCity}`,
      );

      const { results } = response.data;

      setCities([...cities, results]);

      console.log(results);
    },
    [newCity, cities],
  );

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <input
          value={newCity}
          onChange={e => setNewCity(e.target.value)}
          type="text"
          placeholder="Get the temperature of your city"
        />
        <button type="submit">Get</button>
      </Form>

      <Content>
        {/* <Card>
          <h2>Saquarema, RJ</h2>
          <p>Ensolarado, 02/08/2020</p>
          <Temperature>
            <h1>23°C</h1>
            <p>15:09h</p>
          </Temperature>
        </Card> */}
        {cities.map(city => (
          <Card key={city.temp}>
            <h2>{city.city}</h2>
            <p>
              {city.description}, {city.date}
            </p>
            <Temperature>
              <h1>{city.temp}°C</h1>
              <p>{city.time}h</p>
            </Temperature>
          </Card>
        ))}
      </Content>
    </Container>
  );
};

export { Dashboard };
