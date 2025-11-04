import AuthButton from '@/components/auth/AuthButton';
import AuthLink from '@/components/auth/AuthLink';
import AuthText from '@/components/auth/AuthText';
import AuthTextInput from '@/components/auth/AuthTextInput';
import AuthView from '@/components/auth/AuthView';
import GoogleSigninButton from '@/components/auth/GoogleSigninButton';
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
            <AuthText> Inicia sesión </AuthText>

            <Spacer height={40} />

            <View style={styles.form}>
                <AuthTextInput
                    label="Nombre de usuario"
                    value={username}
                    onChangeText={setUsername}
                />
                
                <AuthTextInput
                    label="Contraseña"
                    isPassword
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                />

                <Spacer height={8} />

                <AuthButton onPress={handleLogin} disabled={false}>
                    <AuthText style={styles.signInButtonText}> Entrar </AuthText>
                </AuthButton>

                <Spacer height={8} />

                <AuthText style={styles.registerText}>
                    ¿No tienes cuenta? <AuthLink to="register">Regístrate</AuthLink>
                </AuthText>

                <Spacer height={20} />

                <AuthText style={styles.orGoogle}> o </AuthText>

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
    signInButtonText: {
        color: '#d5ecff'
        
    },
    registerText: {
        textAlign: 'center',
        color: '#d5ecff'
    },
    orGoogle: {
        textAlign: 'center'
    }
});

export default Login;