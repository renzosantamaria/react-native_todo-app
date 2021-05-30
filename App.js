import React, {useState} from 'react';
import { StyleSheet, View, Button, FlatList } from 'react-native';

import TodoItem from './components/TodolItem'
import TodoInput from './components/TodoInput'

export default function App() {
  const [todoItems, setTodoItems] = useState([])
  const [isAddMode, setIsAddMode] = useState(false)

  const addTodosHandler = (payload) =>{
    setTodoItems(currentTodos => [...currentTodos, {id: Math.random().toString(), value: payload}]);
    setIsAddMode(false)
  }
  
  const removeTodoHandler = (todoID) =>{
    setTodoItems(currentTodos => {
      return currentTodos.filter((todo) => todo.id !== todoID)
    })
  }

  const cancelAddTodo = () => {
    setIsAddMode(false)
  }

  return (
    <View style={styles.screen}>
      <View style={styles.addButton}>
        <Button color="white" title="Add new todo!" onPress={() => setIsAddMode(true)} />
      </View>

      <TodoInput visible={isAddMode} onCancel={cancelAddTodo} onAddTodo={addTodosHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id} // Use when the object has an "id" isteand of a "key"
        data={todoItems}
        renderItem={ itemData => (
          <TodoItem
            id={itemData.item.id}
            onDelete={removeTodoHandler}
            styles={styles}
            title={itemData.item.value} /> 
          ) } 
      />
    </View>
      );
}

const styles = StyleSheet.create({
  screen:{
    // backgroundColor: '#c0d0a0',
    backgroundColor: 'salmon',
    padding: 50,
    minHeight: '100%'
  },
  addButton:{
    backgroundColor: 'black' ,
    borderRadius: 8,
    marginVertical: 30
  }

});

