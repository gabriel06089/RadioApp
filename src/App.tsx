/* eslint-disable prettier/prettier */
// Importe as dependências necessárias
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Importe suas páginas
import RadioScreen from './Views/Radios';
import HomeScreen from './Views/Home';
// Crie uma instância de createStackNavigator
const Stack = createStackNavigator();

// Componente principal que contém a navegação
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false, // ou personalize conforme necessário
      }}>
        {/* Configuração das telas */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Radio" component={RadioScreen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
