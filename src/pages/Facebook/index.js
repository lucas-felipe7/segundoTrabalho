import React from 'react';
import { View, Button, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Facebook({ navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const logo = { uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Facebook_New_Logo_%282015%29.svg/512px-Facebook_New_Logo_%282015%29.svg.png?20191031020909" }
  return (

    <View style={styles.container}>

      <Image
        style={styles.logotipo}
        source={logo}></Image>

      <TextInput
        style={styles.inputstyles}
        placeholder='email or phone'></TextInput>

      <TextInput
        style={styles.inputstyles}
        placeholder='password'
        secureTextEntry={true}></TextInput>

      <TouchableOpacity
        style={styles.botao}
        onPress={() => navigation.navigate('Perfil')}>
        <Text
          style={styles.botaoText}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.textoDeBaixo}>
        sing up for facebook
      </Text>



    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b5998'
  },
  logotipo: {
    width: 200,
    height: 80,
  },
  inputstyles: {
    marginTop: 10,
    width: 300,
    backgroundColor: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius: 6,
    padding: 12
  },
  botao: {
    height: 50,
    backgroundColor: '#000080',
    marginTop: 10,
    borderRadius: 6,
    alignItems: 'center',
    justifyContent: 'center',
    width: 300,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  textoDeBaixo: {
    color: '#fff',
  }
})