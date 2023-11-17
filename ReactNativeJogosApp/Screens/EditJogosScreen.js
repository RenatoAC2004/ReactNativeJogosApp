import React, { useState, useEffect } from 'react'; 

import { View, TextInput, Button } from 'react-native'; 

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

   const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`); 

   const jogo = response.data; 

   setTitle(jogo.title); 

   setThumbnail(jogo.thumbnail); 

   setStatus(jogo.status);
   
   setSDescription(jogo.short_description)

  } catch (error) { 

   console.error("Erro ao buscar jogo:", error); 

  } 

 }; 

 

 const editJogo = async () => { 

  try { 

   await axios.put(`https://www.freetogame.com/api/game?id=${id}`, { title, thumbnail, status, short_description }); 

   navigation.goBack(); 

  } catch (error) { 

   console.error("Erro ao editar jogo:", error); 

  } 

 }; 

 

 return ( 

    <View> 
        
    <TextInput placeholder="Título" value={title} onChangeText={setTitle} /> 
 
    <TextInput placeholder="Thumbnail" value={thumbnail} onChangeText={setThumbnail} /> 
 
    <TextInput placeholder="Status" value={status} onChangeText={setStatus} /> 
    
    <TextInput placeholder="Descrição" value={short_description} onChangeText={setSDescription} /> 
 
    <Button title="Editar" onPress={editJogo} /> 
 
   </View> 

 ); 

} 

 
export default EditJogosScreen;