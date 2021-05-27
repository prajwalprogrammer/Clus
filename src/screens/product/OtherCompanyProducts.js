import React from 'react'
import { StyleSheet, View,Dimensions,Image } from 'react-native'
import { Text, RowView } from "styles";

import BottomSheet, {
  BottomSheetScrollView,
  BottomSheetFlatList,
} from "@gorhom/bottom-sheet";
import ProductPrices from "data/ProductPrices";
import { StylesAll } from '../../Styles/Styles';
const WIDTH = Dimensions.get("screen").width;

const OtherCompanyProducts = () => {
  const [MainCat, setMainCat] = React.useState(ProductPrices);
  function renderMainCat(item, index) {
    var trendingStyle = {};

    if (index == 0) {
      trendingStyle = { marginLeft: 10 };
    } else {
      trendingStyle = {};
    }

    return (
      <View
        style={{
          ...StylesAll.MainCat,
          height: 200,
          width: WIDTH * 0.35,
          ...trendingStyle,
          ...StylesAll.trendingShadow,
        }}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
          }}
        >
          <Image
            source={{ uri: item.img }}
            resizeMode="cover"
            style={{ ...StylesAll.ImageStyle, height: "50%" }}
          />
          <RowView style={{ justifyContent: "space-between", height: "35%" }}>
            <View>
              <Text size={20}>{item.name}</Text>
              <RowView>
                <Text bold size={13}>
                  ${" "}
                </Text>
                <Text bold size={20}>
                  {item.price}
                </Text>
              </RowView>
            </View>
          </RowView>
        </View>
      </View>
    );
  }
  return (
    <View style={{ marginTop: 20 }}>
    <BottomSheetFlatList
      horizontal
      showsHorizontalScrollIndicator={false}
      data={MainCat}
      // snapToInterval={WIDTH * 0.75 + 12}
      decelerationRate="fast"
      contentContainerStyle={{ paddingBottom: 20 }}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item, index }) => renderMainCat(item, index)}
    />
  </View>
  )
}

export default OtherCompanyProducts

const styles = StyleSheet.create({})
