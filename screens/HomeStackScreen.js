import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useEffect } from 'react';
import HomePageScreen from './HomePageScreen';
import VocabOverviewScreen from './VocabOverviewScreen';
const Stack = createNativeStackNavigator();
const HomeStackScreen = ({ state, descriptors, navigation, route }) => {
    useEffect(() => {
        navigation.setOptions({
            headerShown: false,
            title: "Home",
            // tabBarIcon: ({ size, color }) => (
            //     <Icon name="home" size={size} color={color} />
            // ),
            tabBarActiveTintColor: "#72C",
            tabBarActiveBackgroundColor: "#f3f3f7",
        });
    }, [navigation])
    
  return (
    <Stack.Navigator > 
        <Stack.Screen
            name="HomeStack"
            component={HomePageScreen}
        />
        <Stack.Screen
            name="VocabOverview"
            component={VocabOverviewScreen}
        />
    </Stack.Navigator>
  )
}

export default HomeStackScreen;