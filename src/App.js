import React from 'react';
import './css/App.css';
import logo from './logo.svg'
import TodoList from './TodoList'

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
          <div>
            <img src={logo} alt="logo" className="App-logo"></img>
            <div className="Title">
              <p>
                Todoアプリを作ってみた
              </p>
            </div>
          </div>
        </div>
        <div className="Main">
          <TodoList
            todos={this.state.todos}
          />
        </div>
      </div>
    );
  }
}

export default App;
