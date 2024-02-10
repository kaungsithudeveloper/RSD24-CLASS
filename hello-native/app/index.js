import { View, Text, StyleSheet,TextInput, TouchableOpacity, Button } from "react-native";
import { Link } from "expo-router";
import { useState } from "react";

import FontAwesome from "@expo/vector-icons/FontAwesome"

const styles = StyleSheet.create({
    list:{
        borderWidth: 1,
        borderColor: '#ddd',
        margin: 20,
    },

    listItem:{
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    itemText: {
        fontSize: 18,
        flexGrow: 1,
    },
    form: {
        margin: 15,
        flexDirection: 'row',

    },
    input: {
        flexGrow: 1,
        padding: 10,
        backgroundColor: '#ddd',
        fontSize: 18,
    }
});

export default function App() {

    const[subject, setSubject]= useState('');

    const [tasks, setTasks] = useState([
        { _id: 1, subject: "R Apple", done: false },
		{ _id: 2, subject: "R Orange", done: true },
		{ _id: 3, subject: "R Mango", done: true },
    ]);

    const add = () => {
        const _id = tasks[tasks.length -1]._id + 1;
        setTasks([ ...tasks, {_id, subject, done: false} ]);
        setSubject('');
    }


    return (

        <View>

            <View style={styles.form}>
                <TextInput 
                    style={styles.input}
                    value={subject}
                    onChangeText={setSubject} />
                <Button title="ADD" onPress={add}/>
            </View>
            <View style={styles.list}>

                {tasks.map(item => (
                    <View style={styles.listItem} key={item._id}>
                        <Text style={styles.itemText}>
                            {item.subject}
                        </Text>

                        <Link href="/edit" style={{ marginRight: 10 }}>
                            <FontAwesome name="edit" style={{ fontSize:18, color: "teal"}}/>
                        </Link>

                        <TouchableOpacity 
                            onPress={() => {
                            setTasks(tasks.filter(task => {
                                return task._id !== item._id
                            }));
                        }}>
                            <FontAwesome name="trash" style={{ fontSize:18, color: "salmon"}}/>
                        </TouchableOpacity>
                    </View>
                ))}
            </View>

        </View>
    
    )
}