import React, {} from 'react'
import { StatusBar, Text, View } from 'react-native'

import Navigation from './src/navigation/index'
import { useFonts } from 'expo-font';

import {AuthProvider} from 'context/auth'


const App = () => {
  
  let [fontsLoaded] = useFonts({
      'OpenSans-Light': require('./assets/font/openSans/OpenSans-Light.ttf'),
      'OpenSans-Regular': require('./assets/font/openSans/OpenSans-Regular.ttf'),
      'OpenSans-SemiBold': require('./assets/font/openSans/OpenSans-SemiBold.ttf'),
      'ProzaLibre-Medium': require('./assets/font/prosaLibre/ProzaLibre-Medium.ttf'),
      'ProzaLibre-Regular': require('./assets/font/prosaLibre/ProzaLibre-Regular.ttf'),
      'ProzaLibre-SemiBold': require('./assets/font/prosaLibre/ProzaLibre-SemiBold.ttf'),
      'ProzaLibre-SemiBoldItalic': require('./assets/font/prosaLibre/ProzaLibre-SemiBoldItalic.ttf'),
  });

  if(!fontsLoaded){
   return <View>
     
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