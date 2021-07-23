import React from 'react';

import { Container, Title } from './style';

import { RectButtonProps } from 'react-native-gesture-handler'

interface Props extends RectButtonProps {
  title: string;
  onPress: () => void;
}

export function Button({
  title,
  onPress,
  ...rest }: Props) {
  return (
    <Container onPress={onPress} {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}