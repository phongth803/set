import React, {useState, useEffect} from 'react';
import {View, TextInput, Button, FlatList, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {addTodoRequest, fetchTodoRequest} from '../redux/actions';

interface Todo {
  todoID: string;
  todoName: string;
  isChecked: boolean;
}

interface RootState {
  todo: {
    todos: Todo[];
    loading: boolean;
    error: string | null;
  };
}

const AddTask = () => {
  const [taskText, setTaskText] = useState('');
  const dispatch = useDispatch();
  const {todos, loading} = useSelector((state: RootState) => state.todo);

  useEffect(() => {
    dispatch(fetchTodoRequest());
  }, [dispatch]);

  const handleAddTask = () => {
    if (taskText.trim()) {
      dispatch(
        addTodoRequest(taskText),
      );
      setTaskText('');
    }
  };

  return (
    <View style={{padding: 20}}>
      <View style={{flexDirection: 'row', marginBottom: 20}}>
        <TextInput
          style={{
            flex: 1,
            borderWidth: 1,
            borderColor: '#ccc',
            padding: 10,
            marginRight: 10,
            borderRadius: 5,
          }}
          value={taskText}
          onChangeText={setTaskText}
          placeholder="Enter your task..."
        />
        <Button title="Add" onPress={handleAddTask} />
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <FlatList
          data={todos}
          keyExtractor={item => item.todoID}
          renderItem={({item}) => (
            <View
              style={{
                padding: 15,
                borderBottomWidth: 1,
                borderBottomColor: '#eee',
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text
                style={{
                  flex: 1,
                  textDecorationLine: item.isChecked ? 'line-through' : 'none',
                }}>
                {item.todoName}
              </Text>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default AddTask;
