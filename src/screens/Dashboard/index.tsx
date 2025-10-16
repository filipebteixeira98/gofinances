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
} from './styles';

import { HighlightCard } from '../../components/HighlightCard';

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
        <HighlightCard />
        <HighlightCard />
        <HighlightCard />
      </HighlightCards>
    </Container>
  );
}
