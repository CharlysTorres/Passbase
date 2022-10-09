import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import Toast from 'react-native-toast-message';
import { StatusBar } from 'react-native';

import AppRoutes from './AppRoutes';
import AuthRoutes from './AuthRoutes';

function Routes() {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(setUser);

    return subscriber;
  },[])

  return (
    <>
      <NavigationContainer>
        <StatusBar 
          barStyle="dark-content"
          backgroundColor="transparent"
          translucent
        />
        { user ? <AppRoutes /> : <AuthRoutes /> }
      </NavigationContainer>
      <Toast />
    </>
  );
}

export default Routes;
