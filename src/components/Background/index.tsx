import { LinearGradient } from 'expo-linear-gradient';
import React, { ReactNode } from 'react';
import theme from '../../global/styles/theme';

interface BackgroundProps {
    children: ReactNode;
}

export function Background({ children }: BackgroundProps) {
    return (
        <LinearGradient
            // Background Linear Gradient
            colors={[theme.colors.primary, theme.colors.secondary60]}
            style={{ flex: 1 }}
        >
            {children}
        </LinearGradient>
    );
}
