import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import { fonts, colors } from '../../global';

export function Header() {
  const [ user, setUser ] = useState();

  const userID = auth().currentUser?.uid;

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.greeting}>Olá,</Text>
        <Text style={styles.userName}>Seja bem vindo!</Text>
      </View>
      <Image 
        source={require('../../assets/avatar.png')}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    marginTop: getStatusBarHeight(),
  },
  greeting: {
    fontSize: 32,
    color: colors.heading,
    fontFamily: fonts.text,
  },
  userName: {
    fontSize: 32,
    fontFamily: fonts.heading,
    lineHeight: 40,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 50,
  },
});