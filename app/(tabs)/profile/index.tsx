import ThemedText from '@/components/ThemedText';
import ThemedView from '@/components/ThemedView';
import { ThemeSwitcher } from '@/components/ui/ThemeSwitcher';
import { useAuth } from '@/hooks/useAuth';
import React from 'react';
import { TouchableOpacity } from 'react-native';

export default function Profile() {
    const { logout } = useAuth()

    return (
        <ThemedView>
            <ThemedText>Perfil</ThemedText>
            <ThemeSwitcher />

            <TouchableOpacity onPress={logout}>
                <ThemedText>Cerrar sesión</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}