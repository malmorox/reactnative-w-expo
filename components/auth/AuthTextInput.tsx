import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, TouchableOpacity, View } from 'react-native';

interface AuthTextInputtProps extends TextInputProps {
    label?: string;
    isPassword?: boolean;
}

const AuthTextInput: React.FC<AuthTextInputtProps> = ({ label, style, isPassword = false, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);
    
    return (
        <View style={styles.container}>
            {label && (
                <Text style={styles.label}>
                {label}
                </Text>
            )}

            <View style={styles.inputContainer}>
                <TextInput
                    {...props}
                    secureTextEntry={isPassword && !showPassword}
                    placeholderTextColor={'#d5ecff'}
                    style={styles.input}
                />

                {isPassword && (
                    <TouchableOpacity
                        onPress={() => setShowPassword(!showPassword)}
                        style={styles.icon}
                    >
                        <Ionicons
                            name={showPassword ? 'eye-off' : 'eye'}
                            size={22}
                            color='#d5ecff'
                        />
                    </TouchableOpacity>
                )}
            </View>
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
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderColor: '#d5ecff',
        borderWidth: 1.5,
        borderRadius: 10,
    },
    input: {
        flex: 1,
        paddingVertical: 10,
        paddingHorizontal: 14,
        color: '#d5ecff',
        fontSize: 16,
    },
    icon: {
        position: 'absolute',
        right: 12,
    },
});

export default AuthTextInput;