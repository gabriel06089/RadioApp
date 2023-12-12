/* eslint-disable prettier/prettier */
// Importe as dependências necessárias
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importe suas páginas
import RadioScreen from './Views/Radios';
import HomeScreen from './Views/Home';
import Player from './Views/Player';

// Crie uma instância de createStackNavigator
const Stack = createStackNavigator();

// Componente principal que contém a navegação
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Radio"
        screenOptions={{
          headerShown: false, // ou personalize conforme necessário
        }}>
        {/* Configuração das telas */}
        <Stack.Screen name="Player" component={Player} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Radio" component={RadioScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
