import React, { useState } from 'react';
import { View, TextInput, Button, Image, Alert, Text, BackHandler } from 'react-native';
import { handleLogin } from '../handlers'
import { getData, setData } from './asyncStorage';

const SearchScreen = ({navigation}) => {
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [uf, setUF] = useState('');
  const [validCep, setValidCep] = useState(false);

  const handleBack = () => {
    navigation.goBack();
  }

  const handleGoReport = () => {
    navigation.navigate('ReportList')
  }

  const fetchCEP = () => {
    try {
      fetch(
          `https://viacep.com.br/ws/${cep}/json/`,{
          method: 'get'}
      )
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setLogradouro(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setUF(data.uf);
        setValidCep(true)
      });

    } catch (error) {
      console.error('Erro ao buscar dados da API:', error);
    }
  }

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
        placeholder="CEP"
        onChangeText={(text) => setCep(text)}
        value={cep}
        style={{
          borderWidth: 1,
          borderColor: 'gray',
          width: 300,
          height: 40,
          marginBottom: 20,
          padding: 10,
        }}
      />
      {validCep && (
        <Text style={{ fontWeight: 'bold' }}>
          CEP: {cep}{"\n"}
          Logradouro: {logradouro}{"\n"}
          Bairro: {bairro}{"\n"}
          Cidade: {cidade}{"\n"}
          UF: {uf}
        </Text>
      )}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '50%', marginTop: 10 }}>
        <Button title="Pesquisar CEP" onPress={fetchCEP} style={{marginTop: 10}}/>
        <Button title="Continuar" onPress={() => {
           setData('reportCep', cep);
           setData('reportStreet', logradouro);
           navigation.navigate("GarbageDescription") 
        }} disabled={( !validCep )} style={{marginTop: 10}}/>
      </View>
    </View>
    </View>
  );
};

export default SearchScreen;
