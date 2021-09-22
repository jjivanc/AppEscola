import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Input } from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
import { Text } from 'react-native-elements';

export default function App() {

  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)
  const entrar = () =>  {
    console.log("entrou")
    console.log(email)
    console.log(password)
  }

  return (
    <View style={styles.container}>
        <Text h4> Login </Text>
        <Input placeholder="E-mail" leftIcon={{type: 'font-awesome', name: 'envelope'}} onChangeText={value => setEmail(value)} keyboardType="email-address"></Input>
        <Input placeholder="Senha" leftIcon={{type: 'font-awesome', name: 'lock'}} onChangeText={value => setPassword(value)} secureTextEntry={true}></Input>
        <Button title="Entrar"  type="outline" onPress={() => entrar()}/>
        
        <StatusBar style="hidden" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },  
});
