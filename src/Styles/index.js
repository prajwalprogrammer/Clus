import React, {useState, useEffect} from 'react'
import {Text as RNText, View as RNView, Image} from 'react-native'
import color from 'colors'

const Text = ({
        children, 
        style, 
        bold=false,
        regular=false,
        white=false, 
        heading=false,
        headingItalic=false,
        headingBold=false,
        headingRegular=false,
        size=15, 
        adjustsFontSizeToFit=false, 
        numberOfLines=10000
    })=>{
    let font = 'OpenSans-Light'
    var colorTheme = color.black
    if (bold) font=('OpenSans-SemiBold')
    if(white) colorTheme = color.white
    if (regular) font=('OpenSans-Regular')
    if (heading) font=('ProzaLibre-Medium')
    if (headingRegular) font=('ProzaLibre-Regular')
    if (headingBold) font=('ProzaLibre-SemiBold')
    if (headingItalic) font=('ProzaLibre-SemiBoldItalic')
    return <RNText style={{color:colorTheme,fontSize:size,fontFamily:font , ...style}} numberOfLines={numberOfLines} adjustsFontSizeToFit={adjustsFontSizeToFit}>{children}</RNText>
}

const RowView = ({children, style})=><RNView style={{flexDirection:'row',alignItems:'center',...style}}>{children}</RNView>

export {Text, RowView}