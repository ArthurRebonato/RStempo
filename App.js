import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Login from './src/Paginas/Login';
import Menu from './src/Paginas/Menu';
import Previsao from './src/Paginas/Previsao';
import Sobre from './src/Paginas/Sobre';

const Stack = createNativeStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            headerTitleAlign: "center",
            headerStyle: {
              backgroundColor: '#1c3c94',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        >
          <Stack.Screen
            name="Login"
            component={Login}
            options={
              { headerShown: false }
            }
          />

          <Stack.Screen
          name="Menu"
          component={Menu}
          options={
            {
              title: 'Menu',
            }
          }
          />

          <Stack.Screen
          name="Previsao"
          component={Previsao}
          options={
            {
              title: 'Previsão do Tempo',
            }
          }
          />

          <Stack.Screen
          name="Sobre"
          component={Sobre}
          options={
            {
              title: 'Sobre',
            }
          }
          />

        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;