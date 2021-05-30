import React from "react";
import {StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const TodoItem = props => {
    return (
        <TouchableOpacity onPress={props.onDelete.bind(this, props.id)}>
            <View style={styles.listItem}> 
                <Text >{props.title}</Text>
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem:{
        padding: 3,
        marginVertical: 5,
        backgroundColor: 'white',
        borderColor: 'wheat',
        borderWidth: 1,
        borderRadius: 8
    }
})
export default TodoItem
