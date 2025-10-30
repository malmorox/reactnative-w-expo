import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Redirect, Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
    const { theme } = useTheme();
    const { user } = useAuth();

    if (!user) {
        return <Redirect href="/(auth)/login" />;
    }

    return (
        <Tabs 
            screenOptions={{ 
                headerShown: false, 
                tabBarActiveTintColor: theme.tabIconSelected,
                tabBarInactiveTintColor: theme.tabIconDefault,
                tabBarStyle: {
                    backgroundColor: theme.tabBackground,
                    borderTopColor: theme.tabBorder
                },
                tabBarLabelStyle: {
                    color: theme.tabLabel,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Inicio'
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Perfil'
                }}
            />
        </Tabs>
    );
}