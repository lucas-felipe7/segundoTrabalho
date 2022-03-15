
import React from 'react';
import { View, Text, Button, StatusBar, Image, StyleSheet,SafeAreaView, ScrollView  } from 'react-native';

export default function Home({navigation}) {
 return (
   <View style={{flexDirection: "column", padding: 80}}>
      <StatusBar barStyle="dar-content" hidden = {false} backgroundColor="black"/>
      <Button
        
        title = "facebook"
        onPress = { () =>
          navigation.navigate('Facebook')}
          />
        <Button
        
        title = "Perfil"
        onPress = { () =>
          navigation.navigate('Perfil')}
        />
      <Button
        title = "Instagram"
        onPress = { () =>
          navigation.navigate('Instagram')}
         />
   </View>  
 );
}

