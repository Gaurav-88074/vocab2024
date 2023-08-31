import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable} from 'react-native';
const MyButton = (props) => {
    // console.log(props.backgroundColor);
    return (
        <Pressable 
            android_ripple={
                {
                    color : 'white'
                }
            }
            style={
                {
                    color : props.color,
                    backgroundColor:props.backgroundColor,
                    height: props.height,
                    width : props.width, 
                    
                    ...styles.myButton
                }
            }
            onPress = {
                // props.onPress.bind(this,props.value)
                props.onPress
            }
        >
            <Text style={
                {
                    fontSize:30,
                    color:props.color,
                    fontWeight : 'bold',
                    
                }
            }>
                {props.title}
            </Text>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    myButton: {
        alignItems:'center',
        justifyContent:'center',
        borderRadius:10,
    },
  });
export default MyButton