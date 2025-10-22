import { useState } from 'react';


import { AuthView } from '@/components/AuthView';
import { ThemedTextInput } from '@/components/ThemedTextInput';


const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <AuthView>
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
        </AuthView>
    );
};

export default Login;