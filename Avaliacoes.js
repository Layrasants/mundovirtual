import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity, StyleSheet } from 'react-native';

// Componente de Avaliação Individual
const Review = ({ stars, initial, name, review }) => {
  return (
    <View style={styles.review}>
      <Text style={styles.stars}>{'★'.repeat(stars)}</Text>
      <Text style={styles.name}>
        <Text style={styles.initial}>{initial}</Text>
        <Text style={styles.bold}>{name}</Text>
      </Text>
      <Text style={styles.reviewText}>{review}</Text>
    </View>
  );
};

// Tela de Avaliações
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Avaliações</Text>

      <Review
        stars={5}
        initial="W"
        name="Berg Augusto Silva"
        review="Vocês estão de parabéns, foram além das minhas expectativas."
      />
      <Review
        stars={5}
        initial="C"
        name="Carla Maria da Silva Peixoto"
        review="Melhor serviço que existe :)"
      />
      <Review
        stars={5}
        initial="A"
        name="Ana Beatriz Magdalena"
        review="Ótimo atendimento, funcionários prestativos e atenciosos, parabéns!"
      />

      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a2e',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 22,
    color: '#fff',
    marginBottom: 20,
  },
  review: {
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    width: '100%',
  },
  stars: {
    color: '#ffdd00',
    fontSize: 18,
    marginBottom: 5,
  },
  name: {
    color: '#fff',
    marginBottom: 5,
  },
  bold: {
    fontWeight: 'bold',
  },
  initial: {
    backgroundColor: '#666',
    borderRadius: 50,
    color: '#fff',
    width: 25,
    height: 25,
    textAlign: 'center',
    lineHeight: 25,
    marginRight: 10,
  },
  reviewText: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
  continueButton: {
    backgroundColor: '#28a745',
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '100%',
    alignItems: 'center',
  },
  continueButtonText: {
    fontSize: 18,
    color: '#fff',
  },
});
