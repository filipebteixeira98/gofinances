import React from 'react';
import { getBottomSpace } from 'react-native-iphone-x-helper';

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
  TransactionsList,
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';
import { TransactionCard } from '../../components/TransactionCard';

export function Dashboard() {
  const transactionCardData = [
    {
      type: 'positive',
      title: 'Website Development',
      amount: '$12,000.00',
      category: {
        name: 'Sales',
        icon: 'dollar-sign',
      },
      date: '04/13/2025',
    },
    {
      type: 'negative',
      title: 'Hamburger',
      amount: '$59.00',
      category: {
        name: 'Food',
        icon: 'coffee',
      },
      date: '04/14/2025',
    },
    {
      type: 'negative',
      title: 'Apartment Rent',
      amount: '$1,200.00',
      category: {
        name: 'Home',
        icon: 'shopping-bag',
      },
      date: '04/15/2025',
    },
  ];

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
        <TransactionsList
          data={transactionCardData}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() }}
        />
      </Transactions>
    </Container>
  );
}
