import React from 'react'
import {
  StyleSheet,
  View,
  Dimensions,
  TextInput,
  ScrollView,
  Pressable,
  Image,
  FlatList,
} from "react-native";
import CONSTANT from "navigation/navigationConstant";
import { FontAwesome5, Feather, AntDesign, Ionicons,SimpleLineIcons } from "@expo/vector-icons";
import * as RootNavigation from "navigation/RootNavigation";
import colors from "colors";

import { Text, RowView } from "styles";

const Header = (props) => {
  return (
    <RowView
        style={{
          margin: 25,
          height: 45,
          justifyContent: "space-between",
        }}
      >
        <Ionicons
          name="chevron-back"
          size={30}
          color="black"
          onPress={() => RootNavigation.navigate(props.navCom)}
        />
        <Text size={17} color={colors.lighttext} size={21} bold>
          {props.name}
        </Text>
        {props.Avatar?props.Avatar:
        <Image
          source={require("../../assets/images/7b8322de5adc6e2607af672b3afb562b.png")}
          resizeMode="cover"
          style={{
            borderRadius: 10,
            top: 5,
            width: "15%",
            height: "100%",
            left: 0,
          }}
        />}
      </RowView>
  )
}

export default Header

const styles = StyleSheet.create({})
