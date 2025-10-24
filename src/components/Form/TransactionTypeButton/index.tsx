import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Icon, Title } from './styles';

const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
} as const;

interface TransactionTypeButtonProps extends TouchableOpacityProps {
  type: 'up' | 'down';
  title: string;
  isActive: boolean;
}

export function TransactionTypeButton({
  type,
  title,
  isActive,
  ...rest
}: TransactionTypeButtonProps) {
  return (
    <Container {...rest} isActive={isActive} type={type}>
      <Icon name={icon[type]} type={type} />
      <Title>{title}</Title>
    </Container>
  );
}
