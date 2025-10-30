import { AuthView } from '@/components/AuthView';
import { GoogleSigninButton } from '@/components/GoogleSigninButton';
import { ThemedButton } from '@/components/ThemedButton';
import { ThemedLink } from '@/components/ThemedLink';
import { ThemedText } from '@/components/ThemedText';
import { ThemedTextInput } from '@/components/ThemedTextInput';
import Spacer from '@/components/ui/Spacer';
import { useAuth } from '@/hooks/useAuth';
import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, StyleSheet, View } from 'react-native';

const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (!username || !password) {
            return;
        }

        try {
            await login(username, password);
            router.replace('/(tabs)');
        } catch (error: any) {
            Alert.alert('Error', error.message);
        } finally {
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

                <Spacer height={8} />

                <ThemedText style={styles.registerText}>
                    ¿No tienes cuenta? <ThemedLink to="register">Regístrate</ThemedLink>
                </ThemedText>

                <Spacer height={20} />

                <ThemedText style={styles.orGoogle}> o </ThemedText>

                <Spacer height={20} />

                <GoogleSigninButton />
            </View>
        </AuthView>
    );
};

const styles = StyleSheet.create({
    form: {
        width: 300,
        maxWidth: 400,
        alignSelf: 'center'
    },
    registerText: {
        textAlign: 'center'
    },
    orGoogle: {
        textAlign: 'center'
    }
});

export default Login;