import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { AuthView } from '@/components/AuthView';
//import { GoogleSigninButton } from '@/components/GoogleSigninButton';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedLink } from '@/components/ThemedLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import Spacer from '@/components/ui/Spacer';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            return;
        }
    };

    return (
        <AuthView>
            <ThemedText> Inicia sesión </ThemedText>

            <Spacer height={40} />

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

                <ThemedButton onPress={handleLogin} loading={false} disabled={false}>
                    <ThemedText> Entrar </ThemedText>
                </ThemedButton>

                <Spacer height={20} />

                <ThemedText>
                    ¿No tienes cuenta? <ThemedLink to="Registro">Regístrate</ThemedLink>
                </ThemedText>

                {/*<GoogleSigninButton />*/}
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