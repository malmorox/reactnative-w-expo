import { ThemeProvider } from '@/contexts/themeContext';
import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
    return (
        <ThemeProvider>
            <Stack>
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </ThemeProvider>
    );
}

export default RootLayout; 