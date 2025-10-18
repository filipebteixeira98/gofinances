import React from 'react';

import {
  Container,
  Header,
  Wrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
  return (
    <Container>
      <Header>
        <Wrapper>
          <UserInfo>
            <Photo
              source={{ uri: 'https://github.com/filipebteixeira98.png' }}
            />
            <User>
              <UserGreeting>Hello,</UserGreeting>
              <UserName>John</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </Wrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Income"
          amount="$9,700.00"
          lastTransaction="Last income on April 13"
        />
        <HighlightCard
          type="down"
          title="Outcome"
          amount="$1,259,00"
          lastTransaction="Last outcome on April 17"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="$16,141.00"
          lastTransaction="From April 1 to 17"
        />
      </HighlightCards>
      <Transactions>
        <Title>Listing</Title>
        <TransactionCard />
      </Transactions>
    </Container>
  );
}
