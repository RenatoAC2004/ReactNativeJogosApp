import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

function ViewJogosScreen({ route }) {
  const { id } = route.params;
  const [jogo, setJogo] = useState(null);

  useEffect(() => {
    fetchJogo();
  }, []);

  const fetchJogo = async () => {
    try {
      const response = await axios.get(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games/${id}`);
      setJogo(response.data);
    } catch (error) {
      console.error("Erro ao buscar jogo:", error);
    }
  };

  return (
    <View style={styles.container}>
      {jogo && (
        <View style={styles.content}>

          <Text style={styles.title}>{jogo.title}</Text>

          <Image source={{ uri: jogo.thumbnail }} style={styles.thumbnail} />

          <Text>Status: {jogo.status}</Text>

          <Text>{jogo.short_description}</Text>
          
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  thumbnail: {
    width: 200,
    height: 200,
    borderRadius: 5,
    marginBottom: 10,
  },
});

export default ViewJogosScreen;
