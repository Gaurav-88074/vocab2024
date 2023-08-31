import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

import HomeStackScreen from "./screens/HomeStackScreen";
import FeedDataScreen from "./screens/FeedDataScreen";
import FavouriteScreen from "./screens/FavouriteScreen";
import ProfileScreen from "./screens/ProfileScreen";
import PracticeScreen from "./screens/PracticeScreen";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
const bottomTab = createBottomTabNavigator();
const MainApp = () => {
    return (
        <NavigationContainer>
            <bottomTab.Navigator>
                <bottomTab.Screen
                    //stack navigator inside bottom navigator
                    name="HomePageScreen"
                    component={HomeStackScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="home" size={size} color={color} />
                        ),
                    }}
                />

                <bottomTab.Screen
                    name="FeedDataScreen"
                    component={FeedDataScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <AntDesign name="database" size={size} color={color} />
                        ),
                    }}
                />
                <bottomTab.Screen
                    name="PracticeScreen"
                    component={PracticeScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="analytics-sharp" size={size} color={color} />
                        ),
                    }}
                />
                <bottomTab.Screen
                    name="SavedScreen"
                    component={FavouriteScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <Ionicons name="bookmark" size={size} color={color} />
                        ),
                    }}
                />
                <bottomTab.Screen
                    name="ProfileScreen"
                    component={ProfileScreen}
                    options={{
                        tabBarIcon: ({ size, color }) => (
                            <AntDesign name="user" size={size} color={color} />
                        ),
                    }}
                />
            </bottomTab.Navigator>
        </NavigationContainer>
    );
};

export default MainApp;
