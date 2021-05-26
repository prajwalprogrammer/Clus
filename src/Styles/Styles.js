import {StyleSheet,Dimensions} from 'react-native'
import colors from "colors";

const WIDTH = Dimensions.get("screen").width;
const HEIGTH = Dimensions.get("screen").height;
export const StylesAll = StyleSheet.create({
  BagStyle:{
    padding: 15,
    borderRadius: 100,
    backgroundColor: colors.black,
  },
  ImageStyle:{
    position: "absolute",
    borderRadius: 20,
    top: 0,
    width: "100%",
    height: "78%",
  },
  Input: {
    backgroundColor: colors.darkgray,
    width: WIDTH * 0.95,
    borderRadius: 100,
    height: 50,
    justifyContent: "center",
    fontFamily: "OpenSans-Light",
    padding: 5,
  },
  trendingShadow: {
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 10,
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
  MainCat: {
    height: 400,
    width: WIDTH * 0.85,
    backgroundColor: colors.white,
    padding: 15,
    borderColor: colors.white,
    borderRadius: 25,
    justifyContent: "center",
    marginHorizontal: 6,
  },

});