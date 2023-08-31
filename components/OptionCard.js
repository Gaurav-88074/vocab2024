import { StyleSheet, Text, View, Pressable } from "react-native";
import MyButton from "./MyButton";
import GetFetchedData from "../API/FetchData";
import Icon from 'react-native-vector-icons/Ionicons';
import { useState } from "react";
const OptionCard = (props) => {
    // console.log(props);
    const onPress = () => {
        // const passingObj = {
        //     "word" : props.word,
        //     "wordmeaning" : props.wordmeaning,
        //     "id": props.id,
        // }
        // console.log(passingObj);
        props.navigation.navigate("VocabOverview", { obj: props.obj });
    };

    function likePressHandler() {
        setLike(!like);
        return;
    }
    function bookmarkPressHandler() {
        setBookark(!bookmark);
        return;
    }
    const [like, setLike] = useState(false);
    const [bookmark, setBookark] = useState(false);
    return (
        <View style={styles.outerCard}>
            <Pressable
                style={styles.optionCard}
                // onPress={onPress}
                android_ripple={{
                    color: "#f2f1f1",
                }}
            >
                <View style={styles.word}>
                    <Text style={styles.text}>{props.obj.word}</Text>
                </View>
                <View style={styles.meaning}>
                    <Text style={styles.text2}>{props.obj.wordmeaning}</Text>
                </View>
                <View style={styles.more}>
                    <Pressable
                        style={styles.b1}
                        onPress={likePressHandler}
                        android_ripple={{
                            color: "#f2f1f1",
                        }}
                    >
                        {like === false && (
                            <Icon
                                name="heart-outline"
                                size={25}
                                color={"#72C"}
                            />
                        )}
                        {like === true && (
                            <Icon name="heart" size={28} color={"#Ff2323"} />
                        )}
                    </Pressable>
                    <Pressable
                        style={styles.b2}
                        onPress={bookmarkPressHandler}
                        android_ripple={{
                            color: "#f2f1f1",
                        }}
                    >
                        {bookmark === false && (
                            <Icon
                                name="bookmark-outline"
                                size={25}
                                color={"#72C"}
                            />
                        )}
                        {bookmark === true && (
                            <Icon name="bookmark" size={25} color={"#72C"} />
                        )}
                    </Pressable>
                    <Pressable
                        style={styles.b3}
                        // onPress={onPress}
                        android_ripple={{
                            color: "#f2f1f1",
                        }}
                        onPress={onPress}
                    >
                        <Icon name="arrow-forward" size={25} color={"#72C"} />
                    </Pressable>
                </View>
            </Pressable>
        </View>
    );
};

export default OptionCard;

const styles = StyleSheet.create({
    outerCard: {
        height: 200,
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
        paddingLeft: 10,
    },
    meaning: {
        height: "50%",
        width: "100%",
        paddingLeft: 10,
        // borderRadius : 10,
        shadowColor: "gold",

        // backgroundColor: "#72C",
    },
    text2: {
        color: "#333333",
        height: "100%",
        fontSize: 19,
        fontWeight: "bold",
        fontFamily: "sans-serif",
        // textAlignVertical: "center",
    },
    more: {
        width: "100%",
        height: "25%",
        flexDirection: "row",
        // alignItems :"center",
        // marginVertical:10,
        // backgroundColor: "pink",
        // justifyContent: "center",
        // alignItems: "flex-end",
    },
    b1: {
        height: "100%",
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
    b2: {
        height: "100%",
        width: "40%",
        alignItems: "center",
        justifyContent: "center",
    },
    b3: {
        height: "100%",
        width: "30%",
        alignItems: "center",
        justifyContent: "center",
    },
});
