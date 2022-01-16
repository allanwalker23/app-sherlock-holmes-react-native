import React,{useState} from 'react';
import { Background } from '../../components/Background';

import ImageBanner4 from '../../assets/Logo.svg';
import LupaSvg from '../../assets/lupa.svg';
import {
    Container,
    IllustrationImage,
    Footer,
    Title,
    SubTitle
} from './styles';
import { ButtonLogin } from '../../components/ButtonLogin';
import { StatusBar } from 'react-native';
import { Input } from '../../components/Input';
import theme from '../../global/styles/theme';

export function SignIn({ navigation }: any) {
    const[nameUser,setNameuser]=useState('OI');
    function handleGoHome() {
        navigation.navigate('Home',{nameUser});
    }
    return (
        <Background>
            <StatusBar
                barStyle="light-content"
                translucent
                backgroundColor="transparent"
            />
            <Container>
                <ImageBanner4 style={{marginTop:100}}/>

                <Footer>
                    <Title>App Proibido do Sherlock Holmes</Title>
                    <SubTitle>
                    Insira seu número de telefone e veja que eu te conheço melhor do que voce mesma
                    </SubTitle>

                  
                </Footer>
                <Input placeholder="Digite seu nome completo" icon="pencil" placeholderTextColor={theme.colors.shape} onChangeText={text=>setNameuser(text)}
/>

                <ButtonLogin title="Analisar" svg={LupaSvg} onPress={handleGoHome}/>
            </Container>
        </Background>
    );
}
