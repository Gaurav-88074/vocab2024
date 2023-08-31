import React from 'react'
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useState,useEffect } from 'react';
const OptionsLine = (props) => {
    const [changeColor, setChangeColor] = useState("#ffff");
    function optionPressHandler(params) {
        // console.log(props.meaning,props.optionText);
        if(props.clicked===true){
            return;
        }
        if(props.optionText===props.meaning){
            setChangeColor('#00cc7a')
        }
        else{
            setChangeColor('#ff3300')
        }
        props.setClicked(true);
    }
    useEffect(() => {
        if (props.clicked && props.optionText===props.meaning) {
            setChangeColor('#00cc7a')
        }
    }, [props.clicked])
    
    return (
        <Pressable
            style={
                {...styles.optionLine,'backgroundColor':changeColor}
            }
            onPress={optionPressHandler}
            android_ripple={{
                // color: "#f2f1f1",
                color: changeColor,

            }}
        >
            <Text style={
                {...styles.optionLineText,'color':changeColor==="#ffff" ? "black" : "#FFFF"}
            }>
                {props.optionText}
            </Text>
        </Pressable>
    )
}

export default OptionsLine
const styles = StyleSheet.create({
    word: {
        height: "30%",
        width: "100%",
        color: 'red',
        paddingLeft: 10,
    },
    meaning: {
        height: "25%",
        width: "100%",
        paddingLeft: 10,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // borderRadius : 10,
        shadowColor: "gold",

        // backgroundColor: "#72C",
    },
    text2: {
        color: "#333333",
        height: "100%",
        fontSize: 18,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        // textAlignVertical: "center",
    },
    mcqoptions: {
        width: "100%",
        height: "70%",
        flexDirection: "column",
        // backgroundColor:'red'
        // alignItems :"center",
        // marginVertical:10,
        // backgroundColor: "pink",
        // justifyContent: "center",
        // alignItems: "flex-end",
    },
    optionLine: {
        height: '24%',
        width: '100%',
        overflow: 'hidden',
        borderBottomColor: 'grey',
        borderRadius:8,
        marginVertical : 1
        // borderBottomWidth :0.4,
    },
    optionLineText: {
        height: '100%',
        width: '100%',
        fontSize: 18,
        paddingLeft: 10,
        fontWeight: "bold",
        fontFamily: 'sans-serif',
        textAlignVertical: "center",
        overflow: 'scroll',
    },

});
