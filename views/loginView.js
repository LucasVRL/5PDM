import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert, Touchable } from 'react-native';
import { auth, signInWithEmailAndPassword } from '../services/firebaseConfig';
import { SearchScreen } from './searchView'
import { RegisterScreen } from './registeView'

const errors = {
    "auth/invalid-email": "Email Inválido!",
    "auth/invalid-login-credentials": "Email ou senha incorretos."
}

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       navigation.navigate("Search");
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
    });

    /*
    if (email === 'teste@teste.com' && password === 'senha123') {
      navigation.navigate('Search');
    } else {
      return false
    }
    */
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />
      <TextInput
        placeholder="Email"
        onChangeText={(text) => setEmail(text)}
        value={email}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 300,
          height: 40,
          marginBottom: 20,
          padding: 10,
        }}
      />
      <TextInput
        placeholder="Senha"
        onChangeText={(text) => setPassword(text)}
        value={password}
        secureTextEntry={true}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 300,
          height: 40,
          marginBottom: 20,
          padding: 10,
        }}
      />
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%' }}>
        <Button title="Continuar" color='green' onPress={handleLogin} />
        <Button title="Cadastrar-se" onPress={() => { navigation.navigate("Register") }} />
      </View>
    </View>
  );
};

export default LoginScreen;
