import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button, Text } from 'react-native';
import Heading from './Heading';
import Input from './Input';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
    };
  }

  inputChange(inputValue) {
    this.setState({ inputValue });
  }

  addTodo() {
    const { inputValue, todos } = this.state;
    if (inputValue.trim()) {
      const newTodos = [...todos, { text: inputValue, completed: false }];
      this.setState({ todos: newTodos, inputValue: '' });
      console.log('Added Todo:', inputValue); // Logs the new to-do in the terminal
    }
  }

  render() {
    const { inputValue, todos } = this.state;
    return (
      <View style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="always" style={styles.content}>
          <Heading />
          <Input
            inputValue={inputValue}
            inputChange={(text) => this.inputChange(text)}
          />
          <Button title="Add Todo" onPress={() => this.addTodo()} />
          <View style={styles.todoList}>
            {todos.map((todo, index) => (
              <Text key={index} style={styles.todoItem}>
                {todo.text}
              </Text>
            ))}
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  content: {
    flex: 1,
    paddingTop: 60,
  },
  todoList: {
    marginTop: 20,
    paddingHorizontal: 20,
  },
  todoItem: {
    fontSize: 18,
    paddingVertical: 5,
  },
});

export default App;
