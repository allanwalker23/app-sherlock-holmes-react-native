import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Text, Container, Icon } from './styles';

interface Props extends RectButtonProps{
    title:string;

}

export function SelectButton({
    title,
    ...rest
   
}:Props){
    return(
        <Container {...rest}>
            <Icon name="arrow-back"/>
            <Text>{title}</Text>
            
        </Container>
    )
}

