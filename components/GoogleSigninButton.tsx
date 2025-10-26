import { GoogleSigninButton as GoogleButton } from '@react-native-google-signin/google-signin';
import React from 'react';

export const GoogleSigninButton = () => {
    return (
        <GoogleButton
            size={GoogleButton.Size.Wide}
            color={GoogleButton.Color.Dark}
            onPress={() => {
                console.log('pulsado');
            }}
        />
    );
};