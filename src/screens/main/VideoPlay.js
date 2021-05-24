import React from 'react'
import { StyleSheet, View, Dimensions, Pressable, FlatList, ImageBackground } from 'react-native'

import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT from 'navigation/navigationConstant'

import { Text } from 'styles'
import color from 'colors'
import colors from '../../Styles/color'
import { BlurView } from 'expo-blur';
const WIDTH = Dimensions.get('screen').width
const HEIGTH = Dimensions.get('screen').height

const PlayHome1 = () => {
    return (
        <ImageBackground
            style={styles.container}
            source={require('../../assets/images/7b8322de5adc6e2607af672b3afb562b.png')}
            resizeMode='cover'
        >

            <View intensity={100} style={{ bottom: 60, right: 0, width: WIDTH * .70, height: 130, alignItems: 'center', position: 'absolute', blurRadius: 100, flexDirection: 'row',backgroundColor: '#000000' ,borderBottomLeftRadius: 55, borderTopLeftRadius: 60 }}>
                <BlurView
                    intensity={100}
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        backgroundColor: '#000000',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginRight:10,
                        zIndex: 99
                    }}>
                    <BlurView
                        intensity={60}
                        style={{
                            width: 80,
                            height: 80,
                            borderRadius: 80 / 2,
                            backgroundColor: '#ffffff',
                            justifyContent: 'center',
                            alignItems: 'center',
                            zIndex: 99
                        }}>
                        <BlurView
                            intensity={10}
                            style={{
                                width: 60,
                                height: 60,
                                borderRadius: 60 / 2,
                                backgroundColor: '#000000',
                                justifyContent: 'center',
                                alignItems: 'center',
                                zIndex: 99
                            }}>
                            <View
                                
                                style={{
                                    width: 60,
                                    height: 60,
                                    borderRadius: 60 / 2,
                                    backgroundColor: '#000000',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    zIndex: 99
                                }}>
                            </View>
                        </BlurView>
                    </BlurView>
                </BlurView>
                <Text>Swipe To See</Text>

            </View>
        </ImageBackground>
    )
}

export default PlayHome1

const styles = StyleSheet.create({
    nonBlurredContent: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    container: {
        backgroundColor: color.gray,
        flex: 1,
        alignItems: 'center',
        padding: 10,
        paddingTop: HEIGTH * 0.5
    }
})
