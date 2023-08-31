import { StyleSheet, Text, View, ScrollView, Button } from "react-native";
import { useEffect, useState } from "react";

import React from "react";

const FavouriteScreen = ({ state, descriptors, navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: "Saved",
            // tabBarIcon: ({ size, color }) => (
            //     <Icon name="bookmark" size={size} color={color} />
            // ),
            headerShown: false,
            tabBarShowLabel: true,
            keyboardHidesTabBar: true,
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
            <Text>Favourite Screen</Text>
        </View>
    );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 50,
        backgroundColor: "#f3f3f7",
        alignItems: "center",
    },
});
