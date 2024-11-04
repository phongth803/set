import React from 'react';
import { Provider } from 'react-redux';
import store from './app/redux/store';
import AddTask from './app/components/AddTask';

const App = () => {
  return (
    <Provider store={store}>
      <AddTask />
    </Provider>
  );
};

export default App;
