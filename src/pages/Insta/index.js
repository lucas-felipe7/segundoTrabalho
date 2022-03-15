import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Image, TextInput, TouchableOpacity } from 'react-native';

export default function Instagram({ navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);
  const image = { uri: "https://i.pinimg.com/736x/ac/80/59/ac8059a26f62d2ae04d7b504052d163c.jpg" };
  const interrogacao = { uri: 'https://imagensemoldes.com.br/wp-content/uploads/2020/07/Ponto-de-Interroga%C3%A7%C3%A3o-PNG.png' }
  const disquete = { uri: 'https://cdn-icons-png.flaticon.com/512/12/12100.png?w=740' }
  const cadeado = { uri: 'https://cdn-icons-png.flaticon.com/512/345/345535.png' }
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.background}
        source={image}>

        <View style={{ flexDirection: 'row', marginTop: 25 }}>
          <Image
            style={styles.interrogacao}
            source={interrogacao}></Image>

          <Image style={styles.disquete}
            source={disquete}></Image>
        </View>

        <Image
          style={styles.meio}
          source={cadeado}></Image>

        <Text style={{ textAlign: "center", marginTop: 15, color: 'white' }}>Enter the code sent to your number ending in 8691 or use your backu codes.</Text>
        <Text style={{ textAlign: "center", marginTop: 5, color: 'white' }}> It may take few moments to receive SMS</Text>

        <TextInput
          style={styles.inputstyles}
          placeholder='Enter Two-Factor Code'></TextInput>

        <Text
          style={{
            color: 'white', fontWeight: "bold", marginStart: 300, marginTop: 5
          }}>What is it?</Text>

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.navigate('Home') }>
          <Text
            style={styles.botaoText}>Login with instagram</Text>
        </TouchableOpacity>

        <Text style={{ color: 'white', marginTop: 10, marginStart: 150, fontWeight: 'bold' }}>Back to login</Text>
        <Text style={{ color: 'white', marginTop: 10, marginStart: 185, fontWeight: 'bold', borderRadius: 30, backgroundColor: 'grey', width: 30, textAlign: "center", height: 30, marginTop: 10, padding: 3 }}>or</Text>
        <Text style={{ textAlign: 'center', color: 'white', backgroundColor: 'grey', width: 250, height: 35, marginTop: 15, marginStart: 70, fontSize: 15, fontWeight: "bold", padding: 5 }}>Repost without login</Text>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  background: {
    resizeMode: 'cover',
    flex: 1,
    height: 740,
    width: 400,
    position: 'absolute'
  },
  interrogacao: {
    width: 20,
    height: 20,
    marginStart: 310
  },
  disquete: {
    width: 20,
    height: 20,
    marginLeft: 20,
  },
  meio: {
    width: 20,
    height: 20,
    marginTop: 20,
    marginStart: 185
  },
  inputstyles: {
    marginTop: 20,
    width: 350,
    fontSize: 18,
    fontWeight: 'bold',
    borderRadius: 6,
    padding: 12,
    marginLeft: 25,
    marginTop: 15,
    borderColor: 'grey',
    borderWidth: 2,
  },
  botao: {
    height: 50,
    backgroundColor: '#fff',
    marginTop: 15,
    marginLeft: 45,
    width: 300,
  },
  botaoText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 12,
  },

})