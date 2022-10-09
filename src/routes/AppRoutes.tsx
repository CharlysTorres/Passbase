import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Tabs } from '../navigation/Tabs';

const Stack = createStackNavigator();

const AppRoutes: React.FC = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    initialRouteName='Main'
  >

    <Stack.Screen 
      name="Home"
      component={Tabs}
    />

    <Stack.Screen 
      name="Pass"
      component={Tabs}
    />

    <Stack.Screen 
      name="Settigns"
      component={Tabs}
    />
  </Stack.Navigator>
);

export default AppRoutes;