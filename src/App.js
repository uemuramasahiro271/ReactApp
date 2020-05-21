import React from 'react';
import './css/App.css';
import logo from './logo.svg'
import TodoList from './TodoList'
import Form from './Form';

class App extends React.Component {

  constructor(props) {
    super(props)
    
      const todos = []
      this.state = {
        isLoading: false,
        hasError: false,
        todos: todos,
        countTodo: todos.length + 1,
      }
  }

  fetchData(url) {
    this.setState({isLoading: true})
    fetch(url)
      .then((response) => {
        console.log(response)
        if(!response.ok){
          throw Error(response.statusText)
        }
        this.setState({isLoading: false})
        return response
      })
      .then((response) => response.json())
      .then((data) => {
        let countTodo = this.state.countTodo
        const todos = data.map(data => {
          const todo = Object.assign({}, data, {id: countTodo++, done: false})
          return todo
        })
        this.setState({todos, countTodo})
      })
      .catch(() => this.setState({hasError: true}))
  }

  componentDidMount() {
    this.fetchData('data.json')
  }

  handleSubmit(e) {
    e.preventDefault();

    const title = e.target.title.value;
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice();
    const countTodo = this.state.countTodo;

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({todos: todos});
    this.setState({countTodo: countTodo + 1});

    e.target.title.value = '';
    e.target.desc.value = '';
  }

  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({todos});
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
          <div className="ContentsArea">
            <Form handleSubmit={this.handleSubmit.bind(this)}/>
            <TodoList
              todos={this.state.todos}
              setTodoStatus={this.setTodoStatus.bind(this)}
              isLoading={this.state.isLoading}
              hasError={this.state.hasError}
            />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
