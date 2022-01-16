import React, { useState } from 'react';
import {
    useFonts,
    Jost_700Bold,
    Jost_500Medium
} from '@expo-google-fonts/jost';
import { Inter_400Regular } from '@expo-google-fonts/inter';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components/native';
import theme from './src/global/styles/theme';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/Routes/app.routes';
import { Home } from './src/screens/Home';
import { SignIn } from './src/screens/SignIn';

export default function App() {
    let [fontsLoaded] = useFonts({
        Jost_500Medium,
        Jost_700Bold,
        Inter_400Regular
    });
    const [isLoading,setIsLoading]=useState(true);

    if (!fontsLoaded) {
        return <AppLoading />;
    }
    return (
        <ThemeProvider theme={theme}>
            <NavigationContainer>
                <Routes />
            </NavigationContainer>
        </ThemeProvider>
    );
}
