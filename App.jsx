import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
//npm install expo expo-modules-core
import MyButton from "./components/MyButton";
import store from "./store/DataBranch";
import MainApp from "./MainApp";

// import Authentication from "./Authentication";
export default function App() {
    // return <Text>hello</Text>
    return (
        <>
            <Provider store={store}>
                {/* <Authentication/> */}
                <MainApp/>
                <StatusBar style="auto" />
            </Provider>
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fafafa",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        color: "black",
        fontSize: 40,
    },
});
