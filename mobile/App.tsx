import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { AppLoading } from 'expo';

import { Oswald_400Regular, Oswald_700Bold, useFonts } from '@expo-google-fonts/oswald';
import {  Montserrat_400Regular, Montserrat_600SemiBold } from '@expo-google-fonts/montserrat';

import AppStack from './src/routes/AppStack';

export default function App() {

  let [fontsLoaded] = useFonts({
    Oswald_400Regular,
    Oswald_700Bold,
    Montserrat_400Regular,
    Montserrat_600SemiBold
  });

  if(!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <AppStack />
        <StatusBar style="light" />
      </>
    );
  }

}