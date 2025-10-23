import { View } from 'react-native';


export function AuthView({ children }: { children: React.ReactNode }) {
    return (
        <View
            style={{
                backgroundColor: '#182b3bff',
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}
        >
            {children}
        </View>
    );
}
