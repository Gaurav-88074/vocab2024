import { StyleSheet, Text, View, ScrollView, Button ,RefreshControl} from "react-native";
// import {Keyframe} from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import OptionCard from "../components/OptionCard";

import { useEffect, useState } from "react";
// import GetFetchedData from "../API/FetchData";
import GetFetchedData from "../API/AppWrite";
// import {GetFetchMcqData} from "../API/FetchData";
import { useSelector, useDispatch } from "react-redux";
import { vocabSliceActions } from "../store/VocabCardSlice";

const Stack = createNativeStackNavigator();

const HomePageScreen = ({ state, descriptors, navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: "Home",
            // tabBarIcon: ({ size, color }) => (
            //     <Icon name="home" size={size} color={color} />
            // ),
            headerShown: true,
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
    //----------------------
    //-----------------------
    const AllVocabs = useSelector((state) => {
        // console.log(state.vocabReducer.AllVocabData);
        return state.vocabReducer.AllVocabData;
    });
    const dispatch = useDispatch();
    const [fetchAgain, setFetchAgain] = useState(false);
    useEffect(() => {
        GetFetchedData(dispatch);
        // GetFetchMcqData(dispatch)
        
    }, [navigation,fetchAgain]);

    const [refreshState, setRefreshState] = useState(false)
    const onRefresh = ()=>{
        setRefreshState(true);
        dispatch(vocabSliceActions.makeItNull());
        setFetchAgain(!fetchAgain);
        if(AllVocabs!=null){
            setRefreshState(false);
        }
        // console.log("executed");
    }
    return (
        <View style={styles.screen}>
            <ScrollView style={styles.topScroll}
                refreshControl={
                    <RefreshControl
                      refreshing={refreshState}
                      onRefresh={onRefresh}
                    />
                }
            >
                <View style={styles.choiceContainer}>
                    <ScrollView style={styles.scrollView} 
                    // horizontal={true}
                    >
                        {
                            AllVocabs == null
                            &&
                            <Text>
                                data is being fetched
                            </Text>
                            
                        }
                        {   
                            AllVocabs != null 
                            &&
                            
                            AllVocabs.map((obj) => {
                                return <OptionCard key={obj.id} obj ={obj} navigation={navigation} />;
                            })
                        }
                        {/* <OptionCard/> */}
                        {/* <OptionCard/> */}
                    </ScrollView>
                </View>
                {/* <View style={styles.section}>
                    <Text style={styles.text}>Recently Added</Text>
                </View> */}
            </ScrollView>
        </View>
    );
};

export default HomePageScreen;
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: 20,
        backgroundColor: "#f3f3f7",
        alignItems: "center",
        
    },
    topScroll: {
        width: "100%",
    },
    greetText: {
        color: "#ffff",
        fontSize: 20,
        fontWeight: "bold",
    },
    text: {
        height: "100%",
        color: "#2e2e2e",
        fontSize: 16,
        fontWeight: "700",
        textAlignVertical: "center",
        //   fontFamily :'',
    },
    greetContainer: {
        marginTop: 40,
        padding: 20,
        // backgroundColor: '#14c6d0',
        backgroundColor: "#72C",
        height: 180,
        width: "100%",
        borderRadius: 20,
    },
    section: {
        marginVertical: 20,
        paddingLeft: 20,
        color: "#5d5d5d",
        height: 40,
        width: "100%",
        // borderWidth : 1,
        // borderColor : 'black',
    },
    choiceContainer: {
        width: "100%",
        // height: 180,
        // paddingLeft : 20,
        // borderWidth : 1,
        // borderColor : 'black',
        // backgroundColor: '#14c6d0',
        backgroundColor: "#f3f3f7",
    },
    scrollView: {
        // borderWidth : 1,
        // borderColor : 'black',
    },
});
