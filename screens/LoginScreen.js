import React from 'react';
import { View, Text, SafeAreaView, Image } from 'react-native';



const LoginScreen = () => {
    return (
        <SafeAreaView style={{flex: 1,}}>
            <Image source={require('../assets/images/gaming.jpg')} style={{height: 200, width: 300, borderRadius: 20}}/>
            <Text>Login Screen</Text>
        </SafeAreaView>
    );
};

export default LoginScreen;
