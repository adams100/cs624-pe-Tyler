import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Button, Text, TextInput, TouchableOpacity } from 'react-native';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inputValue: '',
      todos: [],
      filter: 'all',
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
    }
  }

  toggleTodoCompletion(index) {
    const { todos } = this.state;
    const updatedTodos = todos.map((todo, i) =>
      i === index ? { ...todo, completed: !todo.completed } : todo
    );
    this.setState({ todos: updatedTodos });
  }

  deleteTodo(index) {
    const { todos } = this.state;
    const updatedTodos = todos.filter((_, i) => i !== index);
    this.setState({ todos: updatedTodos });
  }

  setFilter(filter) {
    this.setState({ filter });
  }

  getFilteredTodos() {
    const { todos, filter } = this.state;
    if (filter === 'active') {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === 'complete') {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  }

  render() {
    const { inputValue, filter } = this.state;
    const filteredTodos = this.getFilteredTodos();

    return (
      <View style={styles.container}>
        <Text style={styles.header}>todos</Text>
        <TextInput
          style={styles.input}
          value={inputValue}
          placeholder="What needs to be done?"
          onChangeText={(text) => this.inputChange(text)}
        />
        <Button title="Add Todo" onPress={() => this.addTodo()} />
        <View style={styles.todoList}>
          {filteredTodos.map((todo, index) => (
            <View key={index} style={styles.todoItem}>
              <Text style={todo.completed ? styles.completedText : styles.todoText}>
                {todo.text}
              </Text>
              <TouchableOpacity
                style={styles.doneButton}
                onPress={() => this.toggleTodoCompletion(index)}
              >
                <Text style={styles.doneText}>{todo.completed ? 'Undo' : 'Done'}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.deleteButton}
                onPress={() => this.deleteTodo(index)}
              >
                <Text style={styles.deleteText}>Delete</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.filterContainer}>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'all' && styles.activeFilter]}
            onPress={() => this.setFilter('all')}
          >
            <Text>All</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'active' && styles.activeFilter]}
            onPress={() => this.setFilter('active')}
          >
            <Text>Active</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.filterButton, filter === 'complete' && styles.activeFilter]}
            onPress={() => this.setFilter('complete')}
          >
            <Text>Complete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  header: {
    fontSize: 36,
    textAlign: 'center',
    color: 'rgba(175, 47, 47, 0.25)',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
  todoList: {
    marginVertical: 20,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  todoText: {
    fontSize: 18,
  },
  completedText: {
    fontSize: 18,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
  doneButton: {
    marginRight: 10,
  },
  doneText: {
    color: 'green',
  },
  deleteButton: {},
  deleteText: {
    color: 'red',
  },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  filterButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
  },
  activeFilter: {
    backgroundColor: '#ddd',
  },
});

export default App;