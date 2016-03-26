/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
} from 'react-native';

import TaskList from './TaskList';

class FullPluralTodo extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      todos: [
        {
          task: 'Learn React Native',
        },
        {
          task: 'Learn Redux',
        },
      ],
    };
  }
  onAddStarted() {
    console.log('on add started');
  }
  render() {
    return (
      <View style={styles.container}>
        <TaskList
          onAddStarted={this.onAddStarted.bind(this)}
          todos={this.state.todos}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});

AppRegistry.registerComponent('FullPluralTodo', () => FullPluralTodo);
