import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tela de Registro
const RegisterScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cpf, setCpf] = useState('');
  const [endereco, setEndereco] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleRegister = () => {
    if (!name || !telefone || !cpf || !endereco || !email || !password || !confirmPassword) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      Alert.alert('Erro', 'As senhas não coincidem.');
      return;
    }
    if (!termsAccepted) {
      Alert.alert('Erro', 'Você deve aceitar os Termos e Condições.');
      return;
    }

    Alert.alert('Registro completo!', `Nome: ${name}, Email: ${email}`);
    navigation.navigate('BemVindo');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Registrar-se</Text>
      <Text style={styles.subtitle}>Criar uma nova conta</Text>

      <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName} />
      <TextInput style={styles.input} placeholder="Telefone" value={telefone} onChangeText={setTelefone} />
      <TextInput style={styles.input} placeholder="CPF" value={cpf} onChangeText={setCpf} />
      <TextInput style={styles.input} placeholder="Endereço" value={endereco} onChangeText={setEndereco} />
      <TextInput style={styles.input} placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" value={password} onChangeText={setPassword} secureTextEntry />
      <TextInput style={styles.input} placeholder="Confirmar senha" value={confirmPassword} onChangeText={setConfirmPassword} secureTextEntry />

      <TouchableOpacity onPress={() => setTermsAccepted(!termsAccepted)}>
        <Text style={styles.terms}>{termsAccepted ? '☑' : '☐'} Aceito os Termos e Condições</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Registrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.loginLink}>Já tem uma conta? Entrar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Tela Bem-vindo
const BemVindoScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
    </SafeAreaView>
  );
};

// Tela de Login
const LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Entrar</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.loginLink}>Não possui uma conta? Registrar-se</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

// Configuração do Stack Navigator
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BemVindo" component={BemVindoScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1a1a2e',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 20,
  },
  input: {
    width: '80%',
    padding: 10,
    margin: 10,
    backgroundColor: '#333',
    borderRadius: 5,
    color: '#fff',
  },
  button: {
    backgroundColor: '#28a745',
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
  loginLink: {
    color: '#0066ff',
    marginTop: 20,
  },
  terms: {
    color: '#fff',
    marginTop: 10,
  },
});

export default Registrar;
