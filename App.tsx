import React, { useEffect, useState } from 'react';
import AppLoading from  'expo-app-loading';
import {
  useFonts,
  Jost_400Regular,
  Jost_500Medium,
  Jost_600SemiBold,
  Jost_700Bold,
} from '@expo-google-fonts/jost';

import {
  Inter_600SemiBold,
  Inter_700Bold,
  Inter_500Medium,
  Inter_400Regular,
  Inter_300Light
} from '@expo-google-fonts/inter';

import Routes from './src/routes';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_500Medium,
    Jost_600SemiBold,
    Jost_700Bold,
    Inter_600SemiBold,
    Inter_700Bold,
    Inter_500Medium,
    Inter_400Regular,
    Inter_300Light
  });

  if(!fontsLoaded) {
    return (
      <AppLoading/>
    )
  }
  
  return (
    <Routes />
  );
}
