import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert, Text } from 'react-native';
import { handleLogin } from '../handlers'

const GarbageDescriptionScreen = ({navigation}) => {
  const [description, setDescription] = useState('');

  const handleReport = () => {
    
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Image
        source={require('../assets/logo.png')}
        style={{ width: 200, height: 200, marginBottom: 30 }}
      />
      <TextInput
        placeholder="Descrição"
        onChangeText={(text) => setDescription(text)}
        value={description}
        multiline
        numberOfLines={3}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 300,
          marginBottom: 20,
          padding: 10,
        }}
      />
      <Button title="Enviar Denúncia" onPress={{}} disabled={( !description )} style={{marginTop: 10}}/>
    </View>
  );
};

export default GarbageDescriptionScreen;
