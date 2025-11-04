import UserProfilePic from '@/components/UserProfilePic';
import { useLocalSearchParams } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function ProfilePage() {
    const { id } = useLocalSearchParams<{ id: string }>();

    const userImage = ``;

    return (
        <View style={styles.container}>
            <UserProfilePic uri={userImage} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        marginBottom: 20,
    },
});