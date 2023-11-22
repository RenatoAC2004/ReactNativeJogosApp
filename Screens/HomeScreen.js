import React, { useState, useEffect } from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet } from 'react-native';
import axios from 'axios';
import { useFocusEffect } from '@react-navigation/native';

function HomeScreen({ navigation }) {
  const [jogos, setJogos] = useState([]);

  useEffect(() => {
    fetchJogos();
  }, []);

  const fetchJogos = async () => {
    try {
      const response = await axios.get('https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games');
      setJogos(response.data);
    } catch (error) {
      console.error("Erro ao buscar jogos:", error);
    }
  };

// Aparentemente essa função é para atualizar a tela depois que o usuário editar um jogo... legal, aprendi uma coisa nova.
  useFocusEffect(
    React.useCallback(() => {
      fetchJogos();
    }, [])
  );

  return (
    <View style={styles.container}>

        <View style={styles.addButtonContainer}>
            <Button
            title="Adicionar Novo Jogo"
            onPress={() => navigation.navigate('AddJogos')}
            />
        </View>

      <FlatList
        data={jogos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>

            <Text style={styles.title}>{item.title}</Text>

            <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />

            <Text>Status: {item.status}</Text>

            <Text>{item.short_description}</Text>

            <View style={styles.buttonsContainer}>

              <Button
                title="Visualizar"
                onPress={() => navigation.navigate('ViewJogos', { id: item.id })}
              />

              <Button
                title="Editar"
                onPress={() => navigation.navigate('EditJogos', { id: item.id })}
              />

              <Button
                title="Remover"
                onPress={async () => {
                  await axios.delete(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games/${item.id}`);
                  fetchJogos();
                }}
              />

            </View>
          </View>
        )}
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f0f0f0',
  },
  itemContainer: {
    backgroundColor: '#fff',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  thumbnail: {
    width: '100%',
    height: 150,
    marginBottom: 5,
    borderRadius: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
  },
  addButtonContainer: {
    marginVertical: 10,
  },
});

export default HomeScreen;
