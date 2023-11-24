import AsyncStorage from '@react-native-async-storage/async-storage';

const setData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.error('Erro ao salvar dados:', error);
    }
};

const getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      return value != null ? JSON.parse(value) : null;
    } catch (error) {
      console.error('Erro ao recuperar dados:', error);
      return null;
    }
};

export {
    setData,
    getData
}