import React from 'react'
import { StyleSheet, Text, View,Dimensions } from 'react-native'
import Home from './Home'
import PlayHome from './VideoPlay'

const WIDTH = Dimensions.get('screen').width
const index = () => {
    return (
        <FlatList
            data={[<Home/>,<PlayHome/>]}
            decelerationRate='0.8'
            bounces={false}
            snapToInterval={WIDTH}
        />
    )
}

export default index

const styles = StyleSheet.create({})