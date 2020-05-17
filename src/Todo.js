import React from 'react';
import './css/Todo.css'

class Todo extends React.Component {

    render() {
        const className = 'undone'
        const link = this.props.done ? '元に戻す' : '完了!'

        return(
            <li className={className}>
                <span>{this.props.id} : </span>
                <span>{this.props.title}</span>
                <a href="" alt="">{link}</a>
                <p>{this.props.desc}</p>
            </li>
        );
    }
}

export default Todo;