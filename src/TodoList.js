import React from 'react';
import Todo from './Todo';
import './css/TodoList.css'

class TodoList extends React.Component { 
    render() {

        if(this.props.isLoading){
            return <h2>loading...</h2>;
        }

        if(this.props.hasError){
            return <h2>error</h2>;
        }

        const todos = this.props.todos.map(todo => 
            <Todo
                key={todo.id}
                {...todo}
                setTodoStatus={this.props.setTodoStatus}
            />
        )
        return(
            <div className="ListArea">
                <ul>
                    {todos}
                </ul>
            </div>
        );
    }
}

export default TodoList;