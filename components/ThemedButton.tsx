import React from 'react';
import { ActivityIndicator, GestureResponderEvent, StyleSheet, Text, TouchableOpacity, useColorScheme } from 'react-native';

interface ThemedButtonProps {
    title: string;
    onPress?: (event: GestureResponderEvent) => void;
    loading?: boolean;
    disabled?: boolean;
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({ title, onPress, loading, disabled }) => {
    const theme = useColorScheme();
    const isDark = theme === 'dark';

    const backgroundColor = disabled
        ? (isDark ? '#333' : '#ccc')
        : (isDark ? '#007AFF' : '#0A84FF');

    return (
        <TouchableOpacity
        onPress={onPress}
        activeOpacity={0.7}
        disabled={disabled || loading}
        style={[styles.button, { backgroundColor }]}
        >
        {loading ? (
            <ActivityIndicator color="#fff" />
        ) : (
            <Text style={styles.text}>{title}</Text>
        )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    text: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
});