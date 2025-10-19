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

interface CategoryProps {
  name: string;
  icon: string;
}

interface TransactionCardDataProps {
  title: string;
  amount: string;
  category: CategoryProps;
  date: string;
}

interface TransactionCardProps {
  data: TransactionCardDataProps;
}

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <Amount>{data.amount}</Amount>
      <Footer>
        <Category>
          <CategoryIcon name="dollar-sign" />
          <CategoryName>{data.category.name}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Footer>
    </Container>
  );
}
