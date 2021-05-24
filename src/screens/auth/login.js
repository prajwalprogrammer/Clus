import React from 'react'
import { StyleSheet, View, Dimensions, Pressable, FlatList } from 'react-native'

import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT from 'navigation/navigationConstant'

import {Text} from 'styles'
import color from 'colors'

const WIDTH = Dimensions.get('screen').width
const HEIGTH = Dimensions.get('screen').height

const PlayHome = () => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Pressable onPress={()=>RootNavigation.navigate(CONSTANT.Home)}>
                    <Text>Click ME!</Text>
            </Pressable>

        </View>
    )
}

export default PlayHome

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.gray,
        flex:1,
        alignItems:'center',
        padding:10,
        paddingTop:HEIGTH*0.5
    }
})
