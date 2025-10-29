import { ThemedView } from '@/components/ThemedView';
import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import { Text } from 'react-native';

export default function Index() {
    const { theme } = useTheme();

    return (
        <ThemedView>
            <Text>Hola</Text>
        </ThemedView>
    );
}