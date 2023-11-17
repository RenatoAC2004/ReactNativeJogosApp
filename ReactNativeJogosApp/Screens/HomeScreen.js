import React, { useState, useEffect } from 'react'; 

import { View, Text, Button, FlatList } from 'react-native'; 

import axios from 'axios'; 

 

function HomeScreen({ navigation }) { 

 const [jogos, setJogos] = useState([]); 

 

 useEffect(() => { 

  fetchJogos(); 

 }, []); 

 

 const fetchJogos = async () => { 

  try { 

   const response = await axios.get('https://www.freetogame.com/api/games'); 

   setJogos(response.data); 

  } catch (error) { 

   console.error("Erro ao buscar jogos:", error); 

  } 

 }; 

 

 return ( 

  <View> 

   <FlatList 

    data={jogos} 

    keyExtractor={(item) => item.id.toString()} 

    renderItem={({ item }) => ( 

     <View> 

      <Text>{item.title}</Text> 

      <Text>{item.thumbnail}</Text> 

      <Text>{item.status}</Text> 

      <Text>{item.short_description}</Text> 

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

        await axios.delete(`https://www.freetogame.com/api/game?id=${item.id}`); 

        fetchJogos(); 

       }} 

      /> 

     </View> 

    )} 

   /> 

   <Button  

    title="Adicionar Novo Jogo" 

    onPress={() => navigation.navigate('AddJogos')} 

   /> 

  </View> 

 ); 

} 

 

export default HomeScreen; 