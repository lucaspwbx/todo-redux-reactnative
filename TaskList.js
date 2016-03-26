import React from 'react-native';

const {
  Text,
  Component,
  StyleSheet,
  View,
} = React;

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
});

class TaskList extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hi this is the tasklist</Text>
      </View>
    );
  }
}

export default TaskList;
