import React from 'react-native';

const {
  Component,
  StyleSheet,
  View,
  ListView,
  PropTypes,
} = React;

import TaskRow from './TaskRow';

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    backgroundColor: '#F7F7F7',
  },
});

class TaskList extends Component {
  constructor(props, context) {
    super(props, context);

    // change to immutable-js here
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });

    this.state = {
      dataSource: ds.cloneWithRows(props.todos),
    };
  }
  renderRow(todo) {
    return (
      <TaskRow todo={todo} />
    );
  }
  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          key={this.props.todos}
          renderRow={this.renderRow}
        />
      </View>
    );
  }
}

TaskList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TaskList;
