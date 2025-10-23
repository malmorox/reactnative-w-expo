import React from 'react';
import { Pressable, StyleSheet, Text, useColorScheme } from 'react-native';

import { useNavigation } from '@react-navigation/native';

type ThemedLinkProps = {
    to: string;
    children: React.ReactNode;
    style?: object;
};

export const ThemedLink: React.FC<ThemedLinkProps> = ({ to, children, style }) => {
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
        fontWeight: '600',
        textDecorationLine: 'underline',
    },
});