import React from 'react';

import {
  Container,
  Title,
  Amount,
  Footer,
  Category,
  CategoryIcon,
  CategoryName,
  Date,
} from './styles';

export function TransactionCard() {
  return (
    <Container>
      <Title>Website Development</Title>
      <Amount>$12,000.00</Amount>
      <Footer>
        <Category>
          <CategoryIcon name="dollar-sign" />
          <CategoryName>Sales</CategoryName>
        </Category>
        <Date>04/13/2025</Date>
      </Footer>
    </Container>
  );
}
