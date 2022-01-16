import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(TouchableOpacity)`
    flex: 1;
    justify-content: center;
    align-items: center;
`;
export const Description= styled.Text`

    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
    text-align: left;
    margin:16px;
    `;
export const NameUser= styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold}`;

