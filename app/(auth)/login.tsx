import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthView } from '@/components/AuthView';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
//import { GoogleSigninButton } from '@/components/GoogleSigninButton; 

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthView>
            <ThemedText> Inicia sesión </ThemedText>

            <View style={styles.form}>
                <ThemedTextInput
                    label="Nombre de usuario"
                    value={username}
                    onChangeText={setUsername}
                />
                
                <ThemedTextInput
                    label="Contraseña"
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <ThemedButton onPress={() => {}} loading={false} disabled={false}>
                    <ThemedText> Entrar </ThemedText>
                </ThemedButton>
            </View>
        </AuthView>
    );
};

const styles = StyleSheet.create({
    form: {
        width: 300,
        maxWidth: 400,
        alignSelf: 'center',
    },
});

export default Login;