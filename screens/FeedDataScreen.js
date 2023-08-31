import { StyleSheet, Text, View, ScrollView, Button,
    TextInput
    } from "react-native";
import { useEffect, useState } from "react";

import VocabInputSection from "../components/VocabInputSection";
const FeedDataScreen = ({ state, descriptors, navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: "Add",
            // tabBarIcon: ({ size, color }) => (
            //     <AntDesign name="database" size={size} color={color} />
            // ),
            headerShown: false,
            tabBarShowLabel: true,
            keyboardHidesTabBar: true,
            tabBarHideOnKeyboard: true,
            
            // tabBarBadge : 1,

            // tabBarActiveTintColor : '#14c6d0',
            tabBarActiveTintColor: "#72C",
            // tabBarInactiveTintColor : '#ffff',
            tabBarActiveBackgroundColor: "#f3f3f7",
            // tabBarInactiveBackgroundColor:'#f3f3f7'
        });
    }, [navigation]);
    return (
        <View style={styles.screen}>

            <VocabInputSection/>
            
        </View>
    );
};

export default FeedDataScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: "#72c",
        alignItems: "center",
        flexDirection:'column',
        justifyContent:'flex-end',
    },
    
});
