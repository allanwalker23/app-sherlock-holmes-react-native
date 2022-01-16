import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(RectButton)`
    width: ${RFValue(274)}px;
    height: ${RFValue(56)}px;
    background-color: ${({ theme }) => theme.colors.main};
   
    flex-direction: row;
    justify-content: center;
    align-items: center;
    
    border-radius: 7px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.medium};
    color: ${({ theme }) => theme.colors.shape};
`;
