import { useTheme } from '@/hooks/useTheme';
import React from 'react';
import {
    ActivityIndicator,
    GestureResponderEvent,
    StyleSheet,
    TouchableOpacity,
    View,
    ViewStyle,
} from 'react-native';

interface ThemedButtonProps {
    onPress?: (event: GestureResponderEvent) => void;
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    children: React.ReactNode;
}

export const ThemedButton: React.FC<ThemedButtonProps> = ({
    onPress,
    loading = false,
    disabled = false,
    style,
    children,
}) => {
    const { theme } = useTheme();

    return (
        <TouchableOpacity
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled || loading}
            style={[
                styles.button,
                { backgroundColor: disabled ? theme.background : theme.tint },
                style,
            ]}
        >
            <View style={styles.content}>
                {loading ? <ActivityIndicator color="#fff" /> : children}
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        paddingVertical: 14,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 10,
    },
    content: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 6,
    },
});