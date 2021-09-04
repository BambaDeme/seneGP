import * as React from "react";
import { Button, Text, TextInput, View } from "react-native";

const Login = (props) => {
  console.log(props);
  return (
    <View style={{ marginTop: 100 }}>
      <Text>Se connecter</Text>
      <Text>Pas de compte ? s'inscrire</Text>

      <Button
        title="submit"
        onPress={() => props.route.params.signedIn(true)}
      />
      <Button
        title="sign up"
        onPress={() => props.navigation.navigate("SignUp")}
      />
    </View>
  );
};

export default Login;
