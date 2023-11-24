import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, Image, Alert } from 'react-native';
import { database, ref, set } from '../services/firebaseConfig'; // Importe o serviço do Firebase Database
import { getData, setData } from './asyncStorage';

const GarbageDescriptionScreen = ({ navigation, route }) => {
  const [description, setDescription] = useState('');

  const handleBack = () => {
    navigation.goBack();
  }

  const handleGoReport = () => {
    navigation.navigate('ReportList')
  }

  const handleReport = async () => {
    console.log('Tentativa de envio de denúncia'); // Adicionando o console.log para depurar
    const user = await getData('user');
    const cep = await getData('reportCep');
    const logradouro = await getData('reportStreet');

    if (description.trim() !== '') {
      const reportData = {
        descricao: description,
        cep,
        logradouro,
        user: user.uid
      };

      // Salvando a denúncia no banco de dados
      set(ref(database, `reports/${user.uid}/${cep}`), reportData)
        .then(() => {
          Alert.alert('Denúncia enviada com sucesso!');
          navigation.navigate('ReportList');
        })
        .catch(error => {
          Alert.alert('Erro ao enviar denúncia: ' + error.message);
        });
    } else {
      Alert.alert('Por favor, insira uma descrição.');
    }
  };

  return (
    <View>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }}>
        <Button title="Voltar" color='gray' onPress={handleBack} />
        <Button title="Denúncias" color='gray' onPress={handleGoReport} />
      </View>
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
      <Button
        title="Enviar Denúncia"
        onPress={handleReport}
        disabled={!description}
        style={{marginTop: 10}}
      />
    </View>
    </View>
  );
};

export default GarbageDescriptionScreen;