import { useAuth } from '@/hooks/useAuth';
import { useTheme } from '@/hooks/useTheme';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
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
                //tabBarShowLabel: false,
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
                    tabBarIcon: () => <Ionicons name="home" />
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarIcon: () => <MaterialIcons name="person" />
                }}
            />
        </Tabs>
    );
}