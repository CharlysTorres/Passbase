import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather } from '@expo/vector-icons';

import { HomeApp } from '../../screens/HomeApp';
import { Pass } from '../../screens/Pass';
import { Settings } from '../../screens/Settings';

import { styles } from './styles';

const Tab = createBottomTabNavigator();

export const Tabs = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
      }
    }}
  >
    <Tab.Screen name="HomeApp" component={HomeApp} options={{
      tabBarIcon: ({ focused, size, color }) => (
        <View >
          {
            focused ? (<Feather name="home" size={32} color="#5965E0" />)
            : (<Feather name="home" size={32} color="#666666" />)
          }
          
        </View>
      )
    }}
    />

    <Tab.Screen name="Pass" component={Pass} options={{
      tabBarIcon: ({ focused, size, color }) => (
        <View>
          {
            focused ? (<Feather name="lock" size={32} color="#5965E0" />)
            : (<Feather name="lock" size={32} color="#666666" />)
          }
        </View>
      )
    }}
    />

    <Tab.Screen name="Settings" component={Settings} options={{
      tabBarIcon: ({ focused, size, color }) => (
        <View>
          {
            focused ? (<Feather name="settings" size={32} color="#5965E0" />)
            : (<Feather name="settings" size={32} color="#666666" />)
          }
        </View>
      )
    }}
    />

  </Tab.Navigator>
)