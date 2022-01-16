import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    align-items: center;
`;

export const IllustrationImage = styled.Image`
    width: 100%;
    margin-top: 40px;
`;

export const Footer = styled.View`
    margin-top: 16px;
    align-items: center;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.bold};
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(40)}px;
    line-height: 50px;
    text-align: center;
    margin-bottom: 16px;
`;

export const SubTitle = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.highlight};
    font-size: ${RFValue(15)}px;

    text-align: center;

    margin-bottom: 16px;
`;
