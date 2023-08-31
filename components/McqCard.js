import { StyleSheet, Text, View, Pressable } from "react-native";
import MyButton from "./MyButton";
import GetFetchedData from "../API/FetchData";
import { useState } from "react";
import React from 'react'
import OptionsLine from "./OptionsLine";
const McqCard = (props) => {
//   console.log(props.obj.choiceOptions);
  const onPress = () => {
    // const passingObj = {
    //     "word" : props.word,
    //     "wordmeaning" : props.wordmeaning,
    //     "id": props.id,
    // }
    // console.log(passingObj);
    // props.navigation.navigate("McqOverview", { obj: props.obj });
};

function likePressHandler() {
    setLike(!like);
    return;
}
function bookmarkPressHandler() {
    setBookark(!bookmark);
    return;
}
const [clicked, setClicked] = useState(false);

return (
    <View style={styles.outerCard}>
        <Pressable
            style={styles.optionCard}
            // onPress={onPress}
            // android_ripple={{
            //     color: "#f2f1f1",
            // }}
        >
            <View style={styles.word}>
                <Text style={styles.text}>{props.obj.word}</Text>
            </View>
            {/* <View style={styles.meaning}>
                <Text style={styles.text2}>{props.obj.meaning}</Text>
            </View> */}
            <View style={styles.mcqoptions}>
                {
                    props.obj.choiceOptions.map((obj,index)=>{
                        return < OptionsLine 
                                key={index} 
                                optionText = {obj} 
                                clicked = {clicked}
                                setClicked = {setClicked}
                                meaning = {props.obj.meaning}
                                />
                    })
                }
                
                
                {/* <Pressable
                    style={styles.b3}
                    // onPress={onPress}
                    android_ripple={{
                        color: "#f2f1f1",
                    }}
                    onPress={onPress}
                >
                    <Icon name="arrow-forward" size={25} color={"#72C"} />
                </Pressable> */}
            </View>
        </Pressable>
    </View>
);
}

export default McqCard


const styles = StyleSheet.create({
    outerCard: {
        height: 250,
        marginTop: 30,
        width: "100%",
        overflow: "hidden",
        borderRadius: 15,
        // marginRight: 40,
    },
    optionCard: {
        height: "100%",
        width: "100%",

        // paddingHorizontal: 10,
        flexDirection: "column",
        alignContent: "center",
        backgroundColor: "#fefefe",
    },
    text: {
        color: "#72C",
        height: "100%",
        fontSize: 22,
        fontWeight: "bold",
        textAlignVertical: "center",
        // textAlign:'center',
    },
    word: {
        height: "25%",
        width: "100%",
        color:'red',
        paddingLeft: 10,
    },
    meaning: {
        height: "25%",
        width: "100%",
        paddingLeft: 10,
        flexDirection:'row',
        justifyContent:'flex-start',
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
    optionLine:{
        height:'25%',
        width:'100%',
        overflow:'hidden',
        borderBottomColor:'grey',

        // borderBottomWidth :0.4,
    },
    optionLineText:{
        height:'100%',
        width:'100%',
        fontSize: 18,
        paddingLeft: 10,
        // fontWeight: "bold",
        fontFamily: 'sans-serif',
        textAlignVertical: "center",
    },
    
});
