import {
    StyleSheet,
    Text,
    View,
    Pressable,
    ScrollView,
    TextInput,
    Keyboard,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
const LoginScreen = (props) => {
    function onBottomSignupHandler() {
        props.setAuthScreen("signup");
    }
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function loginButtonHandler(params) {
        console.log(email);
        console.log(password);
    }
    return (
        <View style={styles.container}>
            <LinearGradient
                colors={["#daf7fb", "#fefefe", "#daf7fb"]}
                style={styles.linearGradient}
                start={{ x: 0.7, y: 0 }}
                
            >
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
                            <Text style={styles.forgetButton}>
                                Forgot Password?
                            </Text>
                            <Pressable
                                style={styles.addButton}
                                onPress={loginButtonHandler}
                                android_ripple={{
                                    color: "white",
                                }}
                            >
                                <Text style={styles.buttonText}>Login</Text>
                            </Pressable>
                            <View style={styles.signupButton}>
                                <Text>Don't have an account yet?</Text>

                                <Pressable
                                    style={styles.smallButton}
                                    onPress={onBottomSignupHandler}
                                    android_ripple={{
                                        color: "white",
                                    }}
                                >
                                    <Text style={styles.smallButtonText}>
                                        signup
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

export default LoginScreen;
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
        marginTop: 130,
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
    signupButton: {
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
        fontSize: 20,

        // width: 100,
    },
    smallButtonText: {
        color: "#72c",
        fontWeight: "bold",
    },
});
