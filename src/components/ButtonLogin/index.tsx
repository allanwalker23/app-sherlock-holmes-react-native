import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { SvgProps } from 'react-native-svg';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
    title: string;
    svg: React.FC<SvgProps>;
}
export function ButtonLogin({ title, svg: Svg, ...rest }: Props) {
    return (
        <Container {...rest}>
          
            <Title>{title}</Title>
            <Svg width={30} />
        </Container>
    );
}
