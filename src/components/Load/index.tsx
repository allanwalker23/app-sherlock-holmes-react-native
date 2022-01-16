import React from 'react';
import { ActivityIndicator } from 'react-native';
import theme from '../../global/styles/theme';

import {
  Container,
  LoadingText
} from './styles';

export function Load() {
  return (
    <Container>
        <ActivityIndicator color={theme.colors.shape}/>
        <LoadingText>Analisando...</LoadingText>
    </Container>
  );
}