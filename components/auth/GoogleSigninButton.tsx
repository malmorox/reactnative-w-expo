import { GoogleSigninButton as GoogleButton } from '@react-native-google-signin/google-signin';
import React from 'react';

const GoogleSigninButton = () => {
    return (
        <GoogleButton
            size={GoogleButton.Size.Wide}
            color={GoogleButton.Color.Light}
            onPress={() => {
                console.log('pulsado');
            }}
        />
    );
};

export default GoogleSigninButton;