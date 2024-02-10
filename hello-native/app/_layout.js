import { View, Text, StyleSheet } from "react-native";
import { Slot } from "expo-router";

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    header: {
        padding: 20,
        paddingTop:60,
        backgroundColor: 'slateblue',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
    }
});

export default function App() {
    return <View>
        <View style={styles.header}>
            <Text style={styles.title}>Todo</Text>
        </View>
        <Slot />
        
    </View>
}