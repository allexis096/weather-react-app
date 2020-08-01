import React, { useState, useCallback, FormEvent } from 'react';
import { Container, Card, Content } from './styles';
import { api } from '../../services/api';

interface InputProps {
  temp: number;
}

const Dashboard: React.FC = () => {
  const [newCity, setNewCity] = useState('');
  const [cities, setCities] = useState<InputProps[]>([]);

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>): Promise<void> => {
      event.preventDefault();

      const response = await api.get(
        `weather?format=json-cors&key=4bc8f9ad&city_name=${newCity}`,
      );

      const { results } = response.data;

      setCities([...cities, results]);

      console.log(results);
    },
    [newCity, cities],
  );

  return (
    <Container>
      <Card>
        <form onSubmit={handleSubmit}>
          <input
            value={newCity}
            onChange={e => setNewCity(e.target.value)}
            type="text"
            placeholder="Get the temperature of your city"
          />
          <button type="submit">Find</button>
        </form>
      </Card>
      <Content>
        {cities.map(city => (
          <h1 key={city.temp}>{city.temp}</h1>
        ))}
      </Content>
    </Container>
  );
};

export { Dashboard };
