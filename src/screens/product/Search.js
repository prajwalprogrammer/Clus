import React from 'react'
import { StyleSheet, View, Dimensions, TextInput, ScrollView, Pressable, Image, FlatList } from 'react-native'
import CONSTANT from 'navigation/navigationConstant'
import { FontAwesome5, Feather, AntDesign, Ionicons } from '@expo/vector-icons';
import * as RootNavigation from 'navigation/RootNavigation'
import colors from 'colors'
import { Text, RowView } from 'styles'

const HEIGHT = Dimensions.get('screen').height
const WIDTH = Dimensions.get('screen').width

const Search = ({navigation}) => {
    const [MainCat1, setMainCat1] = React.useState([
        {
            id: 0,
            name: "Heai Oil",
            img: "../../assets/images/bg1.png",
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        }
    ]);
    const [MainCat, setMainCat] = React.useState([
        {
            id: 0,
            name: "Heai Oil",
            img: "../../assets/images/bg1.png",
            bgColor: "#BF012C",
            type: "RUNNING",
            price: "$186",
            sizes: [6, 7, 8, 9, 10]
        },
        {
            id: 1,
            name: "Heai Oil",
            img: '../../assets/images/bg1.png',
            bgColor: "#D39C67",
            type: "TRAINING",
            price: "$135",
            sizes: [6, 7, 8, 9, 10, 11, 12]
        },
        {
            id: 2,
            name: "Heai Oil",
            img: '../../assets/images/bg1.png',
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
        {
            id: 3,
            name: "Heai Oil",
            img: '../../assets/images/bg1.png',
            bgColor: "#7052A0",
            type: "BASKETBALL",
            price: "$199",
            sizes: [6, 7, 8, 9]
        },
    ]);
    function renderMainCat(item, index) {
        var trendingStyle = {};

        if (index == 0) {
            trendingStyle = { marginLeft: 10, }
        } else {
            trendingStyle = {}
        }

        return (
            <Pressable
                style={{ height: 280, width: WIDTH * .41, backgroundColor: colors.white, borderRadius: 25, justifyContent: 'center', margin: 6, ...trendingStyle, marginTop: 20, }}
                onPress={()=>RootNavigation.navigate(CONSTANT.ProductDetails)}
            >


                <View style={{
                    flex: 1,
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <Image
                        source={require('../../assets/images/oil.png')}
                        resizeMode="cover"
                        style={{
                            position: 'absolute',
                            borderRadius: 20,
                            top: 0,
                            width: "100%",
                            height: '78%',

                        }}
                    />
                    <View style={{ height: '20%', justifyContent: 'center' }}>
                        <Text style={{ color: colors.black }}  size={20}>{item.name}</Text>
                    </View>
                    <View style={{ height: '15%',flexDirection: 'row',justifyContent:'space-between' }}>
                        <Text style={{ color: colors.black }}  size={20}>{item.price}</Text>
                        <Ionicons name="heart-circle-sharp" size={30} color="black" />
                    </View>
                </View>



            </Pressable>
        )
    }

    return (
        <View style={{ backgroundColor: colors.gray }}>
            <RowView style={{ margin: 33, height: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                <Ionicons name="chevron-back" size={30} color="black" onPress={()=>navigation.goBack()} />
                <Text size={17} color={colors.lighttext}  size={21}>Search Product</Text>
                <Image
                    source={require('../../assets/images/7b8322de5adc6e2607af672b3afb562b.png')}
                    resizeMode="cover"
                    style={{
                        // position: 'absolute',
                        borderRadius: 10,
                        top: 5,
                        width: "15%",
                        height: '100%',
                        left: 0,

                    }}
                />
            </RowView>


            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }}>
                <RowView style={{ backgroundColor: colors.white, borderRadius: 15, justifyContent: 'space-between', alignSelf: 'center', }}>
                    <Feather name="search" size={27} color={colors.darkblack} style={{ paddingLeft: 14 }} />
                    <TextInput placeholder='Search' placeholderTextColor={colors.inActive} style={styles.TextInput} />

                </RowView>
                <RowView style={{ backgroundColor: colors.white, borderRadius: 15, justifyContent: 'center', alignSelf: 'center', height: '100%', width: '15%' }}><AntDesign name="filter" size={30} color="black" />

                    {/*   <FontAwesome5 name="microphone" size={24} color={colors.active} style={{marginRight:20}} />*/}
                </RowView>
            </View>
            <ScrollView contentContainerStyle={{ paddingTop: 20, marginHorizontal: 10, marginBottom: 20, flexDirection: 'row' }}>
                <View style={{ flexDirection: 'column', width: '50%' }}>
                    <Text style={{}} size={30} >10 Results Found</Text>
                    <FlatList
                        //columnWrapperStyle={{justifyContent:'space-evenly'}}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 10, marginBottom: 50 }}
                        numColumns={1}
                        data={MainCat}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderMainCat(item, index)}
                    />
                </View>
                <View style={{ width: '50%', flexDirection: 'column' }}>
                    <FlatList
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ marginTop: 10, paddingBottom: 50 }}
                        //numColumns={2}
                        data={MainCat}
                        keyExtractor={item => item.id.toString()}
                        renderItem={({ item, index }) => renderMainCat(item, index)}
                    />
                </View>
            </ScrollView>
        </View>
    )
}

export default Search

const styles = StyleSheet.create({
    TextInput: {
        padding: 10,
        paddingHorizontal: 20,
        fontSize: 20,
        color: colors.white,
        width: '65%',
        height: '100%'
    },
})
