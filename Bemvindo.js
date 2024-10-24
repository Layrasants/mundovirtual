import React from 'react';
import { SafeAreaView, View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Tela de Boas-Vindas
const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Imagem de fundo */}
      <Image 
        source={{ uri: 'https://link-para-sua-imagem/design1.png' }} 
        style={styles.image} 
      />

      {/* Conteúdo de boas-vindas */}
      <View style={styles.content}>
        <Text style={styles.subTitle}>Seja bem-vindo ao</Text>
        <Text style={styles.title}>MUNDO VIRTUAL</Text>
        <Text style={styles.text}>
          SOMOS UMA ASSISTÊNCIA TÉCNICA ESPECIALIZADA EM DESKTOPS E NOTEBOOKS.
        </Text>
        <Text style={styles.text}>
          ASSISTÊNCIA TÉCNICA DE NOTEBOOKS E DESKTOPS EM MACEIÓ - AL.
        </Text>
        <Text style={styles.text}>
          É UM ENORME PRAZER TÊ-LO CONOSCO!
        </Text>

        {/* Botão "Continuar" */}
        <TouchableOpacity 
          style={styles.continueButton} 
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.continueButtonText}>Continuar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// Tela Home (ou a próxima tela após o "Continuar")
const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Página Inicial!</Text>
    </SafeAreaView>
  );
};

// Stack Navigator para gerenciar a navegação entre as telas
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen 
          name="Welcome" 
          component={WelcomeScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 5,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
    textAlign: 'center',
  },
  continueButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
