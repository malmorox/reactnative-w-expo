import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, useColorScheme, View } from 'react-native';

interface AuthTextInputtProps extends TextInputProps {
    label?: string;
}

export const AuthTextInput: React.FC<AuthTextInputtProps> = ({ label, style, ...props }) => {
    const theme = useColorScheme();
    const isDark = theme === 'light';

    return (
        <View style={styles.container}>
            {label && <Text style={[styles.label, { color: isDark ? '#ccc' : '#333' }]}>{label}</Text>}
            <TextInput
                {...props}
                placeholderTextColor={isDark ? '#888' : '#aaa'}
                style={[
                styles.input,
                {
                    backgroundColor: isDark ? '#1c1c1e' : '#f1f1f1',
                    color: isDark ? '#fff' : '#000',
                    borderColor: isDark ? '#333' : '#ddd',
                },
                style,
                ]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
    },
    label: {
        marginBottom: 6,
        fontSize: 14,
        fontWeight: '500',
    },
    input: {
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 10,
        paddingHorizontal: 14,
        fontSize: 16,
    },
});