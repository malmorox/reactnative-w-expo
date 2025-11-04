import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { useTheme } from '@/hooks/useTheme';
import React from 'react';

export default function Index() {
    const { theme } = useTheme();

    return (
        <ThemedView>
            <ThemedText>Hola</ThemedText>
        </ThemedView>
    );
}