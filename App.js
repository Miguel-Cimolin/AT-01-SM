import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';

Icon2.loadFont();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={[styles.views, styles.Quadradinhos]}>
          <Icon name="user" size={30} color="#000"></Icon>
          <Text>Perfil</Text>
      </View>
      <View style={[styles.views, styles.Quadradinhos]}>
          <Icon name="camera" size={30} color="#000"></Icon>
          <Text>Camera</Text>
      </View>
      <View style={[styles.views, styles.Quadradinhos]}>
          <Icon2 name="log-out" size={30} color="#000"></Icon2>
          <Text>Sair</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },

  views: 
  {
    width: 270,
    height: 170,
    margin: 15,
  },

  Quadradinhos: 
  {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#DEDEDE',
    shadowOffset: {widht: 5, height: 5},
    shadowOpacity: 0.8,
    shadowRadius: 3,
    borderRadius: 5,
  },

});
