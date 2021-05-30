import React, {useState} from 'react'
import {StyleSheet, View, TextInput, Button, Modal} from 'react-native'

const TodoInput = props => {
    const [enteredTodo, setEnteredTodo] = useState('')

    const todoInputHandler = (enteredText) => {
        setEnteredTodo(enteredText)
    }
    const addTodoHandler = () => {
        props.onAddTodo(enteredTodo)
        setEnteredTodo('')
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={styles.inputContainer} > 
                <TextInput
                placeholderTextColor = 'black'
                value={enteredTodo}
                onChangeText={todoInputHandler}
                style={styles.input}
                placeholder="Enter todo..."
                />
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button onPress={() => props.onCancel()} title="Cancel" color="red" />
                    </View>

                    <View style={styles.button}>
                        <Button onPress={addTodoHandler} title="Add" />
                    </View>                    
                </View>

            </View>
        </Modal>

    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        marginBottom: 10
    },
    input:{
        width: '80%',
        borderColor: 'black',
        borderBottomWidth: 1,
        padding: 10
      },
    buttonContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button:{
        width: '40%'
    }
})

export default TodoInput