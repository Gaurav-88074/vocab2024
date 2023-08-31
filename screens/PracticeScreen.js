import React from 'react'
import { StyleSheet, Text, View, ScrollView, Button, RefreshControl } from "react-native";
import McqCard from '../components/McqCard';
// import { GetFetchMcqData } from "../API/FetchData";
import {GetFetchMcqData} from '../API/AppWrite';
import { useSelector, useDispatch } from "react-redux";
import { vocabSliceActions } from "../store/VocabCardSlice";
import { useEffect,useState} from 'react';

const PracticeScreen = ({ state, descriptors, navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            title: "Practice",
            // tabBarIcon: ({ size, color }) => (
            //     <Icon name="analytics-sharp" size={size} color={color} />
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
    const AllMcqData = useSelector((state) => {
        // console.log(state.vocabReducer.AllMcqData);
        return state.vocabReducer.AllMcqData;
    });
    const dispatch = useDispatch();
    const [fetchAgain, setFetchAgain] = useState(false);
    useEffect(() => {
        GetFetchMcqData(dispatch);
    }, [navigation, fetchAgain]);

    const [refreshState, setRefreshState] = useState(false)
    const onRefresh = () => {
        setRefreshState(true);
        dispatch(vocabSliceActions.makeMcqDataNull());
        setFetchAgain(!fetchAgain);
        if (AllMcqData != null) {
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
                            AllMcqData == null
                            &&
                            <Text>
                                mcq is being fetched
                            </Text>

                        }
                        {
                            AllMcqData != null
                            &&
                            // <Text>
                            //     Every thing is fine
                            // </Text>
                            AllMcqData.map((obj) => {
                                return <McqCard key={obj.id} obj={obj} navigation={navigation} />;
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
}

export default PracticeScreen

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
