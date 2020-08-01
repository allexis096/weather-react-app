import React from 'react';
import { Container, Card, Content } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Card>
        <input type="text" placeholder="Get the temperature of your city" />
        <button type="button">Find</button>
      </Card>
      <Content />
    </Container>
  );
};

export { Dashboard };
