import React, { useState, useEffect } from 'react'; 

import { View, Text, Image } from 'react-native'; 

import axios from 'axios'; 

 

function ViewJogosScreen({ route }) { 

 const { id } = route.params; 

 const [jogo, setJogo] = useState(null); 

 

 useEffect(() => { 

  fetchJogo(); 

 }, []); 

 

 const fetchJogo = async () => { 

  try { 

    const response = await axios.get(`https://www.freetogame.com/api/game?id=${id}`);  

   setJogo(response.data); 

  } catch (error) { 

   console.error("Erro ao buscar jogo:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   {jogo && ( 

    <> 

     <Text>{jogo.title}</Text> 

     <Image source={{ uri: jogo.thumbnail }} style={{ width: 100, height: 100 }} /> 

     <Text>{jogo.status}</Text> 

     <Text>{jogo.short_description}</Text> 

    </> 

   )} 

  </View> 

 ); 

} 

 

export default ViewJogosScreen; 

 