import * as React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/pages/Home';
import Perfil from './src/pages/PerfilFace';
import Facebook from './src/pages/Facebook';
import Instagram from './src/pages/Insta';

const Separator = () => (
  <View style={styles.separator} />
);

function LogoTitle(){
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require('./src/pages/Img/lup.jpg')}
    />
  );
}
const Stack = createNativeStackNavigator();

function App({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Face"}>
        <Stack.Screen 
        name="Home" 
        component={Home} 
        options={{
          title: 'Telas',
          headerStyle: {
            backgroundColor: 'black',
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          
        }}
        />
        <Stack.Screen name="Instagram" component={Instagram} />
        <Stack.Screen name="Facebook" component={Facebook} />
        <Stack.Screen name="Perfil" component={Perfil} 
        options={{

          headerStyle: {
            
            backgroundColor: '#3b5998',
            headerTitle: (props) => <LogoTitle {...props} />,
          },
          
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
const styles = StyleSheet.create({
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
})