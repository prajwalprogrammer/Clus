import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import colors from "colors";
import { SliderBox } from "react-native-image-slider-box";

const ClusDetails = () => {
  const [images, setImages] = React.useState([
    require("../../assets/images/oil.png"),
    require("../../assets/images/oil.png"),
    require("../../assets/images/oil.png"),
  ]);
  return (
    <View>
    <SliderBox
      autoplay={true}
      circleLoop={true}
      images={images}
      sliderBoxHeight={400}
      ImageComponentStyle={{
        width: "80%",
        height: 380,
        left: 0,
        backgroundColor: colors.white,
      }}
      resizeMode="cover"
      inactiveDotColor={colors.lighttext}
      dotColor={colors.black}
    />
  </View>
  )
}

export default ClusDetails

const styles = StyleSheet.create({})
