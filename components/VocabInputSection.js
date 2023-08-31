import React from "react";
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Button,
    TextInput,
    Pressable,
    Alert
} from "react-native";
import { useState } from "react";
import { AddVocab } from '../API/AppWrite'
const VocabInputSection = () => {
    const [word, setWord] = useState("");
    const [meaning, setMeaning] = useState("");

    // const sendPost =async(word,meaning)=>{
    //     await AddVocab(word,meaning);
    // }
    const saveButtonHandler = (e) => {
        // console.log(word);
        // console.log(meaning);
        if (word.length == 0 || meaning.length == 0) {
            // console.log("ya good");
            Alert.alert("Listen bro!!", "Input field can't be empty", [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel",
                },
                { text: "OK", onPress: () => console.log("OK Pressed") },
            ]);
            return;
        }

        AddVocab(word, meaning);
        setWord("");
        setMeaning("");
    };
    return (
        <View style={styles.screen}>
            <ScrollView
                style={styles.scrollAbleContainer}
                contentContainerStyle={"center"}
            >
                <View style={styles.innerContainer}>
                    <TextInput
                        style={styles.textInput}
                        placeholder="Enter Word Here!"
                        onChangeText={(newText) => setWord(newText)}
                        defaultValue={word}
                    />
                    <TextInput
                        style={styles.textInputForMeaning}
                        placeholder="Enter Meaning Here!"
                        onChangeText={(newText) => setMeaning(newText)}
                        defaultValue={meaning}
                    />
                    <Pressable
                        style={styles.addButton}
                        onPress={saveButtonHandler}
                        android_ripple={{
                            color: "white",
                        }}
                    >
                        <Text style={styles.buttonText}>Save</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </View>
    );
};

export default VocabInputSection;

const styles = StyleSheet.create({
    screen: {
        height: "80%",
        width: "100%",

        backgroundColor: "#f3f3f7",
        alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: "hidden",
    },
    scrollAbleContainer: {
        // paddingTop: 30,
        width: "100%",
        // backgroundColor: "#f98",
    },
    innerContainer: {
        paddingVertical: 30,
        width: "100%",
        height: 500,
        justifyContent: "space-around",
        alignItems: "center",
    },
    textInput: {
        paddingHorizontal: 20,
        height: 65,
        width: "90%",
        backgroundColor: "#d8d7d9",
        color :'#7d7d7d',
        fontSize: 23,
        borderRadius: 10,
    },
    textInputForMeaning: {
        paddingHorizontal: 20,
        height: 65,
        width: "90%",
        backgroundColor: "#d8d7d9",
        color :'#7d7d7d',
        fontSize: 23,
        borderRadius: 10,
    },
    addButton: {
        height: 55,
        width: "90%",
        borderRadius: 10,
        backgroundColor: "#72C",
        // color : '#ffff',
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        color: "#ffff",
        fontSize: 23,
    },
});
