import { AuthProvider } from '@/contexts/authContext';
import { ThemeProvider } from '@/contexts/themeContext';
import { Stack } from 'expo-router';
import React from 'react';

const RootLayout = () => {
    return (
        <ThemeProvider>
        <AuthProvider>
            <Stack screenOptions={{ headerShown: false }}>
                <Stack.Screen name="(auth)" options={{ headerShown: false }} />
                <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            </Stack>
        </AuthProvider>
        </ThemeProvider>
    );
}

export default RootLayout; 