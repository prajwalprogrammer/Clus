import React from 'react'
import { StyleSheet, View, Dimensions, Pressable, FlatList, Image, ScrollView, ImageBackground } from 'react-native'
import { Feather, SimpleLineIcons } from '@expo/vector-icons';
import * as RootNavigation from 'navigation/RootNavigation'
import CONSTANT from 'navigation/navigationConstant'
import { Text, RowView } from 'Styles'
import colors from 'colors'
import categoryData from 'data/category'
import MainCategory from 'data/MainCategory'
import { color } from 'react-native-reanimated';
import generateRandomColor from 'hooks/generateRandomColor'


const WIDTH = Dimensions.get('screen').width
const HEIGTH = Dimensions.get('screen').height
const uri = 'https://source.unsplash.com/random'

const Home = ({navigation}) => {
    // Dummy Data
    const [catagery, setCatagery] = React.useState(categoryData);
    const [MainCat, setMainCat] = React.useState(MainCategory);

    // Render

    function renderCatagery(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: 10, }
        } else {
            trendingStyle = {}
        }
        return (
            <ImageBackground source={{uri}} style={{ ...styles.Input, width: 250, height: 50, marginHorizontal: 7, borderRadius: 20, backgroundColor:colors.white, opacity: 0.7,overflow:'hidden', borderWidth:5, borderColor:colors.white}}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    <Text  size={17}>{item.name}</Text>
                </View>
            </ImageBackground>
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
                style={{...styles.MainCat, ...trendingStyle, ...styles.trendingShadow }}

            >
                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',

                }}>
                    <Image
                        source={{uri:item.img}}
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            borderRadius: 20,
                            top: 0,
                            width: "100%",
                            height: '78%',

                        }}
                    />
                    <RowView style={{justifyContent:'space-between', height:'20%'}}>
                        <View>
                            <Text size={20}>{item.name}</Text>
                            <RowView>
                                <Text bold size={13}>$ </Text>
                                <Text bold size={20}>{item.price}</Text>
                            </RowView>
                        </View>
                        <Pressable style={{padding:15, borderRadius:100, backgroundColor:colors.black}}>
                            <SimpleLineIcons name="bag" size={20} color={colors.white} />
                        </Pressable>
                    </RowView>
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
            <View style={{ ...styles.Input, width: WIDTH * .85, height: 100, marginHorizontal: 7, borderRadius: 20, backgroundColor: colors.white, ...styles.trendingShadow, marginBottom: 30, }}>
                <RowView style={{justifyContent: 'space-evenly'}}>
                    <Image
                        source={{uri}}
                        style={{height:70, width:70, borderRadius:20}}
                    />
                    <View style={{width:'50%'}}>
                        <Text size={17} color={colors.black} bold>{item.name}</Text>
                        <RowView>
                                <Text bold size={13}>$ </Text>
                                <Text bold size={20}>{item.price}</Text>
                        </RowView>
                    </View>
                    <Pressable style={{padding:15, borderRadius:100, backgroundColor:colors.black}}>
                            <SimpleLineIcons name="bag" size={20} color={colors.white} />
                    </Pressable>
                </RowView>
            </View>
        )}


    return (
        <View style={styles.container}>
            <ScrollView>
                <RowView style={{ justifyContent: 'center', margin: 30, height: 45, }}>
                    <Pressable onPress={() => RootNavigation.navigate(CONSTANT.SEARCH)}>
                        <RowView style={styles.Input}>
                            <Feather name="search" size={27} color={colors.darkblack} style={{ paddingRight: 10 }} />
                            <Text size={17} color={colors.lighttext}>What are you looking for ?</Text>
                        </RowView>
                    </Pressable>
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
                    <Text size={20}>New Arrivals</Text>
                </RowView>
                <View style={{ marginLeft: 10 }}>
                    <FlatList
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        data={MainCat}
                        snapToInterval={WIDTH*0.85+12}
                        decelerationRate='fast'
                        contentContainerStyle={{paddingBottom:20}}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderMainCat(item, index)}
                    />
                </View>
                <RowView style={{ margin: 15 }}>
                    <Text size={20}>We Recommend</Text>
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
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    Input: {
        backgroundColor: colors.darkgray,
        width: WIDTH * .95,
        borderRadius: 100,
        height: 50,
        justifyContent: 'center',
        fontFamily:'OpenSans-Light',
        padding: 5
    },
    trendingShadow: {
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 10,
    },
    container: {
        backgroundColor: colors.gray,
        flex: 1,
        paddingTop: HEIGTH * 0.03,
    },
    MainCat:{
        height: 400, 
        width: WIDTH * .85, 
        backgroundColor: colors.white, 
        padding:15,
        borderColor: colors.white, 
        borderRadius: 25, 
        justifyContent: 'center', 
        marginHorizontal: 6
    }
})
