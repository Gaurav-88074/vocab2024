import { StyleSheet, Text, View ,Button} from "react-native";
import { useEffect } from 'react';
import OptionCard from "../components/OptionCard";
const VocabOverviewScreen = ({navigation,route}) => {
  const obj = route.params.obj;
  // console.log(obj);
  useEffect(() => {
      navigation.setOptions(
          {
              title : obj.word,
              headerRight : ()=> { 
                  return <Button title="tap me" />
              },
                
          }
      )

  }, [navigation])
  return (
    <View style = {styles.container}>
        
        {/* <Text style = {styles.text}>
          {obj.word}
        </Text> */}
        <Text style = {styles.text}>
          {obj.wordmeaning}
        </Text>
        {/* <Text style = {styles.text}>
          {obj.word}
        </Text>
        <Text style = {styles.text}>
          {obj.word}
        </Text> */}
    </View>
  )
}

export default VocabOverviewScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // backgroundColor: "#fafafa",
        backgroundColor: "#FFFF",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "black",
        fontSize: 40,
    },
});
