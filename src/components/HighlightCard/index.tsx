import React from 'react';

import {
  Container,
  Header,
  Title,
  Icon,
  Footer,
  Amount,
  LastTransaction,
} from './styles';

export function HighlightCard() {
  return (
    <Container>
      <Header>
        <Title>Income</Title>
        <Icon name="arrow-up-circle" />
      </Header>
      <Footer>
        <Amount>$9,700.00</Amount>
        <LastTransaction>Last income on April 13</LastTransaction>
      </Footer>
    </Container>
  );
}
