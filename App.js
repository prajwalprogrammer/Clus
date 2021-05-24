import React, {} from 'react'
import { StatusBar, Text, View } from 'react-native'

import Navigation from './src/navigation/index'
import { useFonts } from 'expo-font';

import {AuthProvider} from 'context/auth'


const App = () => {
  
  let [fontsLoaded] = useFonts({
      'os-L': require('./src/assets/fonts/openSans/OpenSans-Light.ttf'),
      'os-R': require('./src/assets/fonts/openSans/OpenSans-Regular.ttf'),
      'os-B': require('./src/assets/fonts/openSans/OpenSans-SemiBold.ttf'),
      'pl-I': require('./src/assets/fonts/prosaLibre/ProzaLibre-Italic.ttf'),
      'pl-M': require('./src/assets/fonts/prosaLibre/ProzaLibre-Medium.ttf'),
      'pl-R': require('./src/assets/fonts/prosaLibre/ProzaLibre-Regular.ttf'),
      'pl-B': require('./src/assets/fonts/prosaLibre/ProzaLibre-SemiBold.ttf'),
      'pl-BI': require('./src/assets/fonts/prosaLibre/ProzaLibre-SemiBoldItalic.ttf'),
  });

  if(!fontsLoaded){
   return <View>
     <Text>Loadinf</Text>
   </View>
  }
  return (
    <>
      <StatusBar translucent={true} backgroundColor={'transparent'}/>
      <AuthProvider>
          <Navigation/>
      </AuthProvider>
    </>
  )
}

export default App