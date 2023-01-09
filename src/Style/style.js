import React from "react";
import { StyleSheet,useWindowDimensions } from "react-native";
import { View, Button, TouchableOpacity, Text } from "react-native";

const Style = StyleSheet.create({

    back:
    {
        backgroundColor: 'black'
    },
    botao:
    {
        elevation: 8,
        backgroundColor: "#009688",
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        margin: 20,
    },
    txt:
    {
        fontSize:40,
        color: 'white',
        textAlign:'center',
        margin:20,
    },
    txtButton:
    {
        fontSize: 18,
        color: "black",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase" 
    }

})

export {Style};
