import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    TouchableOpacity,
    View
} from 'react-native';

type AuthButtonProps = {
    onPress?: (event: GestureResponderEvent) => void;
    disabled?: boolean;
    children: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
    onPress,
    children,
}) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={styles.button}
        >
            <View style={styles.content}>
                {children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        borderColor: '#d5ecff',
        borderWidth: 1.5,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#115b98ff'
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
});