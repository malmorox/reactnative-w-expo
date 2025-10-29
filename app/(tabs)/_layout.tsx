import { Tabs } from 'expo-router';
import React from 'react';

import { useTheme } from '@/hooks/useTheme';

export default function TabLayout() {
    const { theme } = useTheme();

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