import { useRoute } from '@react-navigation/core';
import React,{useState,useEffect} from 'react';
import { Background } from '../../components/Background';
import { ButtonLogin } from '../../components/ButtonLogin';
import { Header } from '../../components/Header';
import { Load } from '../../components/Load';
import { SelectButton } from '../../components/SelectButton';
import { description } from '../../utils/descriptions';

import { Container,NameUser,Description } from './styles';
interface RouteProps{
    nameUser:string;
}
export function Home({navigation}:any) {
    const [isLoading,setIsLoading]=useState(true);
    const route = useRoute();
    const {nameUser} = route.params as RouteProps;
    const [name,setName]=useState(nameUser);
    const [analizy,setAnalizy]=useState('');
    const [count,setCount]=useState(0);
    function count1000ms(){
        setAnalizy(description[count].analizy.trim());
        setTimeout(function(){ setIsLoading(false)}, 10000);
    }
    function handleTouchContainer(){
        let aux = count;
        setCount(aux+=1);
    }
    useEffect(()=>{
       
        count1000ms();
    },[setIsLoading,isLoading])
    return (
        <Background>
              <Container onPress={handleTouchContainer}>
            {isLoading?<Load/>:(
          <>
                <NameUser>{name}</NameUser>
                <Description>CPF>:29172-1292-1212</Description>
                <SelectButton title="Voltar" onPress={navigation.goBack}/>
           </>
            )}
            </Container>
        </Background>
    );
}
