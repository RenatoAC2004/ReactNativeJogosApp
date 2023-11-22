import React, { useState, useEffect } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import axios from 'axios';

function EditJogosScreen({ route, navigation }) {
   
  const { id } = route.params;
  const [title, setTitle] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [status, setStatus] = useState('');
  const [short_description, setSDescription] = useState('');

  useEffect(() => {

    fetchJogo();

  }, []);

  const fetchJogo = async () => {
    try {
      const response = await axios.get(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games/${id}`);
      const jogo = response.data;

      setTitle(jogo.title);

      setThumbnail(jogo.thumbnail);

      setStatus(jogo.status);

      setSDescription(jogo.short_description);

    } catch (error) {

      console.error("Erro ao buscar jogo:", error);
    }
  };

  const editJogo = async () => {
    try {

      await axios.put(`https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games/${id}`, { title, thumbnail, status, short_description });
      navigation.goBack();

    } catch (error) {

      console.error("Erro ao editar jogo:", error);

    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} />

      <TextInput style={styles.input} placeholder="Thumbnail" value={thumbnail} onChangeText={setThumbnail} />

      <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} />

      <TextInput style={styles.input} placeholder="Descrição" value={short_description} onChangeText={setSDescription} />

      <Button title="Editar" onPress={editJogo} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 20,
  },
  input: {
    width: '100%',
    marginBottom: 10,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
});

export default EditJogosScreen;
