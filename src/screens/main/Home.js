import React from 'react'
import { StyleSheet, View, Dimensions, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
import { Feather, MaterialIcons, FontAwesome5, MaterialCommunityIcons, AntDesign } from '@expo/vector-icons';
import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT from 'navigation/navigationConstant'
import {
    Svg,
    Polygon
} from 'react-native-svg';
import { Text, RowView } from 'Styles'
import colors from 'colors'


const WIDTH = Dimensions.get('screen').width
const HEIGTH = Dimensions.get('screen').height

const Home = ({navigation}) => {
    // Dummy Data
    const [catagery, setCatagery] = React.useState([
        {
            id: 0,
            name: "Winter Collection",
            //img: images.nikePegasus36,
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Winter Collection 1",
            //img: images.nikeMetcon5Black,
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
        },
        {
            id: 2,
            name: "Winter Collection 2",
            //img: images.nikeZoomKobe1Proto,
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);

    const [MainCat, setMainCat] = React.useState([
        {
            id: 0,
            name: "Nike Air Zoom Pegasus 36",
            img: "../../assets/images/bg1.png",
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Nike Metcon 5",
            img: '../../assets/images/bg1.png',
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Nike Air Zoom Kobe 1 Proto",
            img: '../../assets/images/bg1.png',
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);

    // Render

    function renderCatagery(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: 10, }
        } else {
            trendingStyle = {}
        }

        return (
            <View style={{ ...styles.Input, width: 250, height: 70, marginHorizontal: 7, borderRadius: 25, borderColor: colors.white, borderWidth: 3, backgroundColor: item.bgColor }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Image
                        source={require('../../assets/images/7b8322de5adc6e2607af672b3afb562b.png')}
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            borderRadius: 20,
                            top: 0,
                            width: "20%",
                            height: '100%',
                            left: 0

                        }}
                    />
                    <Text size={17} color={colors.lighttext} bold >{item.name}</Text>
                </View>
            </View>
        )
    }


    function renderMainCat(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: 10, }
        } else {
            trendingStyle = {}
        }

        return (
            <View
                style={{ height: 400, width: WIDTH * .85, backgroundColor: colors.white, borderWidth: 15, borderColor: colors.white, borderRadius: 25, justifyContent: 'center', marginHorizontal: 6, ...trendingStyle }}

            >


                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',

                }}>
                    <Image
                        source={require('../../assets/images/7b8322de5adc6e2607af672b3afb562b.png')}
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            borderRadius: 20,
                            top: 0,
                            width: "100%",
                            height: '78%',

                        }}
                    />
                    <View style={{ height: '20%', justifyContent: 'space-between' }}>
                        <Text style={{ color: colors.black }} bold size={20}>{item.name}</Text>
                        <Text style={{ color: colors.black }} bold size={20}>{item.price}</Text>
                    </View>
                </View>



            </View>
        )
    }


    function renderReccomdCat(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: 10, }
        } else {
            trendingStyle = {}
        }

        return (
            <View style={{ ...styles.Input, width: 250, height: 100, marginHorizontal: 7, borderRadius: 25, borderColor: colors.white, borderWidth: 3, backgroundColor: colors.white }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' ,alignItems:'center'}}>
                                   
                      <Image
                        source={require('../../assets/images/7b8322de5adc6e2607af672b3afb562b.png')}
                        resizeMode="cover"
                        style={{
                           // position: 'absolute',
                            borderRadius: 20,
                            top: 0,
                            width: "20%",
                            height: 80,
                            left: 0,
                           


                        }}
                    />
                    
                        <View>
                    <Text size={17} color={colors.black} bold style={{fontFamily:'pl-B'}}>{item.name}</Text>
                    <Text size={17} color={colors.black} bold >{item.price}</Text>
                    
                    </View>
                </View>
            </View>
        )}


    return (
        <View style={styles.container}>
            <RowView style={{ justifyContent: 'center', margin: 30, height: 45, }}>

                <RowView style={{ justifyContent: 'space-evenly' }}>
                    <Pressable onPress={() => RootNavigation.navigate(CONSTANT.SEARCH)}>
                        <RowView style={styles.Input}>
                            <Feather name="search" size={27} color={colors.darkblack} style={{ paddingRight: 10 }} />
                            <Text size={17} color={colors.lighttext} bold>What are you looking for?</Text>
                        </RowView>
                    </Pressable>

                </RowView>
            </RowView>

            <View style={{ marginLeft: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={catagery}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderCatagery(item, index)}
                />
            </View>
            <RowView style={{ margin: 15 }}>
                <Text size={27} bold>New Arrivals</Text>
            </RowView>
            <View style={{ marginLeft: 10 }}>
                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={MainCat}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderMainCat(item, index)}
                />
            </View>
            <RowView style={{ margin: 15 }}>
                <Text size={27} bold>We Recommend</Text>
            </RowView>
            <View style={{ marginLeft: 10 }}>

                <FlatList
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    data={catagery}
                    keyExtractor={item => item.id.toString()}
                    renderItem={({ item, index }) => renderReccomdCat(item, index)}
                />
            </View>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Input: {
        backgroundColor: colors.darkgray,
        width: WIDTH * .75,
        borderRadius: 100,
        height: 50,
        justifyContent: 'space-evenly',

        opacity: 0.7,
        padding: 5
    },
    trendingShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    container: {
        backgroundColor: colors.gray,
        flex: 1,

        //padding: 12,
        marginTop: HEIGTH * 0.02
    }
})
