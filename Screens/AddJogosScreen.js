import React, { useState } from 'react'; 

import { View, TextInput, Button, StyleSheet } from 'react-native'; 

import axios from 'axios'; 

function AddJogosScreen({ navigation }) { 

    const [title, setTitle] = useState(''); 
   
    const [thumbnail, setThumbnail] = useState(''); 
   
    const [status, setStatus] = useState('');  

    const [short_description, setSDescription] = useState(''); 
    
     const addJogo = async () => { 
    
      try { 
    
       await axios.post('https://web-8kwuwc3y8ogc.up-es-mad1-1.apps.run-on-seenode.com/games', { title, thumbnail, status, short_description }); 
    
       navigation.goBack(); 
    
      } catch (error) { 
    
       console.error("Erro ao adicionar jogo:", error); 
    
      } 
    
     }; 

      return ( 

          <View style={styles.container}> 
        
        <TextInput style={styles.input} placeholder="Título" value={title} onChangeText={setTitle} /> 
 
        <TextInput style={styles.input} placeholder="Thumbnail" value={thumbnail} onChangeText={setThumbnail} /> 

        <TextInput style={styles.input} placeholder="Status" value={status} onChangeText={setStatus} /> 
        
        <TextInput style={styles.input} placeholder="Descrição" value={short_description} onChangeText={setSDescription} /> 
        
           <Button title="Adicionar" onPress={addJogo} /> 
        
          </View> 
        
         ); 
        
        } 

        const styles = StyleSheet.create({
            container: {
              flex: 1,
              alignItems: 'center',
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

    export default AddJogosScreen; 