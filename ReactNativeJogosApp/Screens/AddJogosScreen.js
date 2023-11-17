import React, { useState } from 'react'; 

import { View, TextInput, Button } from 'react-native'; 

import axios from 'axios'; 

function AddJogosScreen({ navigation }) { 

    const [title, setTitle] = useState(''); 
   
    const [thumbnail, setThumbnail] = useState(''); 
   
    const [status, setStatus] = useState('');  

    const [short_description, setSDescription] = useState(''); 
    
     const addJogo = async () => { 
    
      try { 
    
       await axios.post('https://www.freetogame.com/api/games', { title, thumbnail, status, short_description }); 
    
       navigation.goBack(); 
    
      } catch (error) { 
    
       console.error("Erro ao adicionar jogo:", error); 
    
      } 
    
     }; 

      return ( 

          <View> 
        
        <TextInput placeholder="Título" value={title} onChangeText={setTitle} /> 
 
        <TextInput placeholder="Thumbnail" value={thumbnail} onChangeText={setThumbnail} /> 

        <TextInput placeholder="Status" value={status} onChangeText={setStatus} /> 
        
        <TextInput placeholder="Descrição" value={short_description} onChangeText={setSDescription} /> 
        
           <Button title="Adicionar" onPress={addJogo} /> 
        
          </View> 
        
         ); 
        
        } 

    export default AddJogosScreen; 