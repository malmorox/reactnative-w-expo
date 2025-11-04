import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

type UserProfilePicProps = {
    uri: string;
};

const UserProfilePic = ({ uri }: UserProfilePicProps) => {
    return (
        <View style={styles.container}>
            <Image source={{ uri }} style={[styles.image]}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 100,
        height: 100,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dc1a1aff',
        borderWidth: 2,
        borderColor: '#ccc',
        overflow: 'hidden',
    },
    image: {
        resizeMode: 'cover',
    },
});

export default UserProfilePic;