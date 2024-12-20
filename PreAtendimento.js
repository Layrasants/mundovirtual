import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tela de Pré-atendimentos
const PreAtendimentoScreen = ({ navigation }) => {
  const atendimentos = [
    { id: 1, name: 'Maria Clara Oliveira', problem: 'Meu pc não tá dando vídeo' },
    { id: 2, name: 'Carla Julia', problem: 'Entrou água no meu pc!!' },
    { id: 3, name: 'Mauro Alves', problem: 'Meu notebook quebrou a tela' },
  ];

  const openChat = (name, problem) => {
    Alert.alert(`Iniciando chat com ${name}`, `Problema: ${problem}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Pré-atendimentos</Text>
      {atendimentos.map((atendimento) => (
        <TouchableOpacity
          key={atendimento.id}
          style={styles.preAtendimento}
          onPress={() => openChat(atendimento.name, atendimento.problem)}
        >
          <Text style={styles.info}>{`${atendimento.id}º - ${atendimento.name}`}</Text>
          <Text style={styles.problem}>{atendimento.problem}</Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Text style={styles.backButtonText}>Voltar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="PreAtendimento">
        <Stack.Screen
          name="PreAtendimento"
          component={PreAtendimentoScreen}
          options={{ title: 'Pré-atendimentos', headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0a0b20',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 24,
    marginBottom: 20,
  },
  preAtendimento: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    width: '100%',
    alignItems: 'center',
  },
  info: {
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  problem: {
    color: 'white',
  },
  backButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#ff6666',
    borderRadius: 10,
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default PreAtendimento;
