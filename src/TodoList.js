import React from 'react';
import Todo from './Todo';
import './css/TodoList.css'

class TodoList extends React.Component { 
    render() {
        const todos = this.props.todos.map(todo => 
            <Todo
                key={todo.id}
                {...todo}
            />
        )
        return(
            <ul>
                {todos}
            </ul>
        );
    }
}

export default TodoList;