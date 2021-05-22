import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

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