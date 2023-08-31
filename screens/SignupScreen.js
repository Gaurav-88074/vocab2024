import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    TextInput,
    Keyboard,
    Button
} from "react-native";
// import LinearGradient from 'react-native-linear-gradient';
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const SignupScreen = (props) => {
    function onBottomLoginHandler(){
        props.setAuthScreen("login");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function signupButtonHandler(params) {
        console.log(email);
        console.log(password);
        console.log(confirmPassword);
        
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#daf7fb", "#fefefe", "#daf7fb"]}
                style={styles.linearGradient}
                start={{ x: 0.7, y: 0 }}
            >   
                {/* <Button title="skip"/> */}
                <Text style={styles.appTitle}>VOCAB</Text>

                <Text style={styles.description}>
                    Social media app for learners
                </Text>
                <View style={styles.screen}>
                    <ScrollView
                        style={styles.scrollAbleContainer}
                        contentContainerStyle={"center"}
                    >
                        <View style={styles.innerContainer}>
                            <TextInput

                                style={styles.textInput}
                                placeholder="Email"
                                onChangeText={(newText) => setEmail(newText)}
                                defaultValue={email}
                            />
                            <TextInput
                                secureTextEntry={true}
                                autoCorrect={false}
                                style={styles.textInputForPassword}
                                placeholder="Password"
                                onChangeText={(newText) => setPassword(newText)}
                                defaultValue={password}
                            />
                            <TextInput
                                secureTextEntry={true}
                                autoCorrect={false}
                                style={styles.textInputForPassword}
                                placeholder="Confirm Password"
                                onChangeText={(newText) => setConfirmPassword(newText)}
                                defaultValue={confirmPassword}
                            />

                            <Pressable
                                style={styles.addButton}
                                onPress={signupButtonHandler}
                                android_ripple={{
                                    color: "white",
                                }}
                            >
                                <Text style={styles.buttonText}>Sign up</Text>
                            </Pressable>
                            <View style={styles.loginButton}>
                                <Text>Already have an account?</Text>

                                <Pressable
                                    style={styles.smallButton}
                                    onPress={onBottomLoginHandler}
                                    android_ripple={{
                                        color: "white",
                                    }}
                                >
                                    <Text style={styles.smallButtonText}>
                                        Login
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </LinearGradient>
        </View>
    );
};

export default SignupScreen;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        width: "100%",
        // alignItems: "center",
        // justifyContent: "center",
    },
    linearGradient: {
        alignItems: "center",
        // justifyContent: 'space-between',
        height: "100%",
        width: "100%",
    },
    appTitle: {
        marginTop: 80,
        fontSize: 23,
        fontWeight: "bold",
        textAlignVertical: "center",
        textAlign: "center",
    },
    description: {
        marginTop: 8,
        fontSize: 16,
        fontWeight: "400",
        color: "grey",
    },
    screen: {
        marginTop: 15,
        height: "70%",
        width: "100%",

        // backgroundColor: "#f3f3f7",
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
        // justifyContent: "space-around",
        alignItems: "center",
    },
    textInput: {
        marginTop: 40,
        paddingHorizontal: 20,
        height: 65,
        width: "90%",
        backgroundColor: "#ffff",
        fontSize: 20,
        borderRadius: 10,
        borderColor: "#ececec",
        borderWidth: 1,
    },
    textInputForPassword: {
        marginTop: 20,
        paddingHorizontal: 20,
        height: 65,
        width: "90%",
        backgroundColor: "#ffff",
        fontSize: 20,
        borderRadius: 10,
        borderColor: "#ececec",
        borderWidth: 1,
    },
    forgetButton: {
        marginTop: 20,
        fontWeight: "bold",
    },
    addButton: {
        marginTop: 50,
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
        fontWeight: "bold",
        fontSize: 23,
    },
    loginButton: {
        marginTop: 30,
        width: 220,
        // borderWidth: 4,
        // borderColor: "blue",
        justifyContent: "center",
        flexDirection: "row",
        // alignItems:'center',
        justifyContent: "space-around",
    },
    smallButton: {
        // height: 30,
        

        // width: 100,
    },
    smallButtonText: {
        // fontSize: 18,
        color: "#72c",
        fontWeight: "bold",
    },
});
