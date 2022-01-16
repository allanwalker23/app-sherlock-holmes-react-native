import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
 color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;