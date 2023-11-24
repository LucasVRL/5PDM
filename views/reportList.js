import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Button } from 'react-native';
import { database, ref } from '../services/firebaseConfig'; // Importe o serviço do Firebase Database
import { getData } from './asyncStorage';
import { onValue } from '@firebase/database';

const ReportListScreen = ({ navigation, route }) => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        fetchReports(); // Chama fetchReports assim que o componente é montado
    }, []);

    const handleBack = () => {
        navigation.goBack();
    }

    const fetchReports = async () => {
        try {
            const user = await getData('user');
            const response = ref(database, `reports/${user.uid}`);

            onValue(response, (snapshot) => {
                if (snapshot.exists()) {
                    const data = snapshot.val();
                    const reportsArray = Object.values(data);
                    setReports(reportsArray);
                } else {
                    setReports([]); // Define como array vazio se não houver relatórios
                }
            });
        } catch (error) {
            console.error('Erro ao buscar relatórios:', error);
        }
    };

    const ReportContainer = () => {
        return (
            <View>
                <View style={styles.container}>
                {reports.map((r, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.title}>{r.cep}</Text>
                        <Text style={styles.street}>{r.logradouro}</Text>
                        <Text style={styles.description}>{r.descricao}</Text>
                    </View>
                ))}
                </View>
            </View>
            
        );
    };

    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'flex-start'}}>
                    <Button title="Voltar" color='gray' onPress={handleBack} />
            </View>
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image
                    source={require('../assets/logo2.png')}
                    style={{ width: 200, height: 200, marginBottom: 30, justifyContent:'center' }}
                />
                {/* Verifica se reports está vazio antes de renderizar o ReportContainer */}
                {reports.length === 0 ? <Text>Nenhum relatório encontrado.</Text> : <ReportContainer />}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        backgroundColor: '#f0f0f0', // Tonalidade diferente da tela
    },
    card: {
        width: '80%',
        marginVertical: 10,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#fff', // Cor do card
        elevation: 3, // Sombreamento no Android
        shadowColor: '#000', // Sombreamento no iOS
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 5,
        color: 'gray',
    },
});

export default ReportListScreen;
