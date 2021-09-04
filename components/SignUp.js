import React from 'react';
import { Button, Text, TextInput, View } from 'react-native';

const SignUp = () => {
    return (
        <View style={{marginTop:100}}>
            <Text>Login !!!!</Text>
            <TextInput placeholder="email..."/>
            <TextInput  placeholder="password..."/>
            <Button title="submit"/>
        </View>
    );
}

export default SignUp;