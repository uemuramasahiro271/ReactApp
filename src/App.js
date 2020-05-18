import React from 'react';
import './css/App.css';
import logo from './logo.svg'
import TodoList from './TodoList'
import Form from './Form';

class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: [
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
      <div className="App">
        <div className="Header">
          <img src={logo} alt="logo" className="App-logo"></img>
          <p className="Title">
              Todoアプリを作ってみた
          </p>
        </div>
        <div className="Main">
          <Form />
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
