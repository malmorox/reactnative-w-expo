import { View } from 'react-native';


export function AuthView({ children }: { children: React.ReactNode }) {
    return (
        <View
            style={{
                backgroundColor: '#192730ff',
            }}
        >
            {children}
        </View>
    );
}
