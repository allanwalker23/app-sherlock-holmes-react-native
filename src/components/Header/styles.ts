import { RectButton } from 'react-native-gesture-handler';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    width: 100%;
    height: 60px;
    flex-direction: row;
    align-items: center;
    margin-top: 56px;
    justify-content: space-between;
`;
export const PhotoContainer = styled.View`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border: 1px solid black;
    border-radius: 7px;
    margin: 0 20px;
`;
export const InfoContainer = styled.View`
    flex-direction: row;
`;
export const TextContainer = styled.View``;

export const PhotoUser = styled.Image`
    width: ${RFValue(58)}px;
    height: ${RFValue(58)}px;
    border-radius: 7px;
`;

export const Title = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.medium};
`;
export const NameUser = styled.Text`
    color: ${({ theme }) => theme.colors.shape};
    font-size: ${RFValue(24)}px;
    font-family: ${({ theme }) => theme.fonts.bold};
`;

export const SubTitle = styled.Text`
    color: ${({ theme }) => theme.colors.main};
    font-size: ${RFValue(13)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Button = styled(RectButton)`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 7px;
    background-color: ${({ theme }) => theme.colors.main};
    justify-content: center;
    align-items: center;

    margin: 20px;
`;
