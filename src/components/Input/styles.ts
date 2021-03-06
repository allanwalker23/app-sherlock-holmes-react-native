
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import { Ionicons } from '@expo/vector-icons'; 
import { TextInput } from "react-native";


export const Container = styled.View`
  width: ${RFValue(310)}px;
  height: ${RFValue(60)}px;
  padding: 0 16px;
  background-color: ${({theme})=> theme.colors.main};
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({theme})=> theme.colors.on};
  flex-direction: row;
  align-items: center;

  margin-top: 16px;
  margin-bottom: 12px;
  
`;

export const InputText = styled(TextInput)`
  flex: 1;
  color: ${({theme})=> theme.colors.shape};
  font-size: 18px;
  font-family: ${({theme})=> theme.fonts.regular};
`;
export const Icon = styled(Ionicons)`
    font-size: ${RFValue(20)}px;
    color: ${({theme})=> theme.colors.on};
    margin-right: 16px;
`

export const Error= styled.Text`
    font-size: ${RFValue(14)}px;
    margin-right: 90px;
    font-family:${({theme})=>theme.fonts.regular};
    color: ${({theme})=>theme.colors.on};


`