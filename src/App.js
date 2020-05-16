import React from 'react';
import './App.css';
import TodoList from './TodoList'

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos : [
        {
          id: 1,
          title: "Hello, React!",
          desc: "React始めました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div>
        <h1>todoアプリを作ってみた</h1>
        <TodoList 
          todos={this.state.todos}
        />
      </div>
    );
  }
}

export default App;
