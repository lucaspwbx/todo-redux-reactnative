/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  AppRegistry,
  Component,
  StyleSheet,
  View,
  Navigator,
  Text,
} from 'react-native';

import TaskList from './TaskList';
import TaskForm from './TaskForm';

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
    this.nav.push({
      name: 'taskform',
    });
  }
  renderScene(route, nav) {
    switch (route.name) {
      case 'taskform':
        return (
          <View style={styles.container}>
            <TaskForm>Add form comes here</TaskForm>
          </View>
        );
      default:
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
  configureScene() {
    return Navigator.SceneConfigs.FloatFromBottom;
  }
  render() {
    return (
      <Navigator
        configureScene={this.configureScene}
        initialRoute={{ name: 'taskform', index: 0 }}
        ref={((nav) => {
          this.nav = nav;
        })}
        renderScene={this.renderScene.bind(this)}
      />
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
