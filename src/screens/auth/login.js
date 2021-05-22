import React from 'react'
import { StyleSheet, View, Dimensions, Pressable, FlatList } from 'react-native'

import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT from 'navigation/navigationConstant'

import {Text} from 'styles'
import color from 'colors'

const WIDTH = Dimensions.get('screen').width
const HEIGTH = Dimensions.get('screen').height

const login = () => {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Pressable onPress={()=>RootNavigation.navigate(CONSTANT.Home)}>
                    <Text>Click ME!</Text>
            </Pressable>

        </View>
    )
}

export default login

const styles = StyleSheet.create({
    container:{
        backgroundColor:color.gray,
        flex:1,
        alighItems:'center',
        padding:10,
        paddingTop:HEIGHT*0.5
    }
})
