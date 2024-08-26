import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import AddTask from './components/AddTask';
import ListTask from './components/ListTask';
import './App.css';  // Import the CSS file

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>My To-Do App</h1>
        <div className="todo-container">
          <AddTask />
          <ListTask />
        </div>
      </div>
    </Provider>
  );
}

export default App;
