import React from 'react';
import { View, Text, Button, StyleSheet, Image } from 'react-native';

const Separator = () => (
  <View style={styles.separator} />
);

export default function Perfil({ navigation }) {

  return (
    <View style={[styles.container, { flexDirection: "column", }]}>

      <View style={{ flex: 2, backgroundColor: "#bfc4dc", height: 100 }} />

      <View style={{ flex: 3, backgroundColor: "white" }}>


        <Text style={{ fontSize: 23, paddingLeft: 140, paddingTop: 80 }}>Your Name</Text>
        <Separator />
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 8 }}>
          <Image
            source={require('../Img/menseger.png')}
            style={{ width: 35, height: 35, paddingLeft: 22 }}
          />

          <Image
            source={require('../Img/pontos.png')}
            style={{ width: 39, height: 35, paddingStart: 8 }}
          />

        </View>
        <Separator />

        <View style={{ paddingTop: 12, paddingEnd: 33 }}>
          <Text style={{ paddingLeft: 60 }}>Your basic info 1</Text>
          <Text style={{ paddingLeft: 60, padding: 9 }}>Your basic info 2</Text>
        </View>

        <View style={{ flexDirection: 'row', paddingTop: 18, marginLeft:40 }}>
          <Button enabled title="      About     " onPress={() => navigation.navigate('Home')} />
          <Button enabled title="     photos     " onPress={() => navigation.navigate('Home')} />
          <Button enabled title="    friends      " onPress={() => navigation.navigate('Home')} />

        </View>
      </View>
      <View style={[styles.containerThree]}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    display: "flex"
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  containerThree: {
    width: 100,
    height: 110,
    backgroundColor: '#bfc4dc',
    position: 'absolute',
    marginTop: 180,
    marginLeft: '30%',
    borderColor: 'white',
    borderWidth: 3,
  },



})