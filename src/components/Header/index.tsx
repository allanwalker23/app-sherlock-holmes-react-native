import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import {
    Container,
    PhotoUser,
    Title,
    NameUser,
    SubTitle,
    PhotoContainer,
    InfoContainer,
    TextContainer,
    Button
} from './styles';
import theme from '../../global/styles/theme';

interface HeaderProps {
    image: string;
    name_user: string;
    subtitle: string;
}
export function Header({ image, name_user, subtitle }: HeaderProps) {
    return (
        <Container>
            <InfoContainer>
                <PhotoContainer>
                    <PhotoUser source={{ uri: image }} />
                </PhotoContainer>
                <TextContainer>
                    <Title>
                        Olá, <NameUser>{name_user}</NameUser>
                    </Title>
                    <SubTitle>{subtitle}</SubTitle>
                </TextContainer>
            </InfoContainer>
            <Button>
                <Ionicons
                    name="football"
                    size={24}
                    color={theme.colors.shape}
                />
            </Button>
        </Container>
    );
}
