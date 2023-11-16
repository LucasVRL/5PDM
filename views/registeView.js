import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { auth, createUserWithEmailAndPassword } from '../services/firebaseConfig';

const errors = {
    "auth/invalid-email": "Email Inválido!",
    "auth/weak-password": "Senha muito fraca! Utilize no mínimo 6 caracteres.",
    "auth/email-already-in-use": "Este email já está sendo utilizado em outra conta."
}

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
       alert("Cadastro concluído com sucesso!");
       navigation.navigate("Login");
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.errorMessage;
      alert(errors[errorCode]);
      return;
    
    })
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
      <TextInput
        placeholder="Confirmar Senha"
        onChangeText={(text) => setConfirmPassword(text)}
        value={confirmPassword}
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
      <Button title="Cadastrar" onPress={handleRegister} disabled={( !password || !email || confirmPassword != password )}/>
    </View>
  );
};

export default RegisterScreen;
