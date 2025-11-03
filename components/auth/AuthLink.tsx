import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';

import { useNavigation } from '@react-navigation/native';

type AuthLinkProps = {
    to: string;
    children: React.ReactNode;
    style?: object;
};

export const AuthLink: React.FC<AuthLinkProps> = ({ to, children, style }) => {
    const theme = useColorScheme();
    const navigation = useNavigation();

    const textColor = theme === 'dark' ? '#93c5fd' : '#1d4ed8';

    return (
        <Pressable onPress={() => navigation.navigate(to as never)}>
            <Text style={[styles.link, { color: textColor }, style]}>{children}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    link: {
        margin: 0,
        padding: 0,
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});