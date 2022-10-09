import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Feather, Ionicons } from '@expo/vector-icons';
import auth from '@react-native-firebase/auth';

import { styles } from './styles';

export function Settings() {

  function handleLogout() {
    auth().signOut();
  }

  return (
    <View style={styles.container}>
      <View style={styles.contentTitle}>
        <Text style={styles.title}>Settings</Text>
      </View>
      <View style={styles.wrapper}>

        <TouchableOpacity style={styles.settingsContent}>
          <View style={styles.icon}>
            <Ionicons name="options" size={26} />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.text}>Geral</Text>
              <Feather name="chevron-right" color="#666666" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsContent}>
          <View style={styles.icon}>
            <Ionicons name="bug-outline" size={26} />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.text}>Reportar Bug</Text>
              <Feather name="chevron-right" color="#666666" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsContent}>
          <View style={styles.icon}>
            <Ionicons name="shield-checkmark-outline" size={26} />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.text}>Segurança</Text>
              <Feather name="chevron-right" color="#666666" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.settingsContent}>
          <View style={styles.icon}>
            <Ionicons name="help" size={26} />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.text}>Sobre</Text>
              <Feather name="chevron-right" color="#666666" size={24} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.settingsContent, { marginTop: 35}]} onPress={handleLogout} >
          <View style={styles.icon}>
            <Feather name="log-out" size={26} />
          </View>
          <View style={styles.wrapperContent}>
            <Text style={styles.text}>Log Out</Text>
              <Feather name="chevron-right" color="#666666" size={24} />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
