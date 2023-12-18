/* eslint-disable prettier/prettier */
// App.tsx
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// Importe suas páginas
import RadioScreen from './Views/Radios';
import HomeScreen from './Views/Home';
import Player from './Views/Player';
import {AudioPlayerProvider} from './Context/AudioPlayerContext';
import Posts from './Views/Posts';
// Importe o AudioPlayerProvider

// Crie uma instância de createStackNavigator
const Stack = createStackNavigator();

// Componente principal que contém a navegação
const App = () => {
  // Aqui você pode definir a faixa de música que você deseja reproduzir

  return (
    <AudioPlayerProvider>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false, // ou personalize conforme necessário
          }}>
          {/* Configuração das telas */}
          <Stack.Screen name="Posts" component={Posts} />
          <Stack.Screen name="Player" component={Player} />
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Radio" component={RadioScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </AudioPlayerProvider>
  );
};

export default App;
