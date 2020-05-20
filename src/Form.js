import React, { Component } from 'react'
import './css/Form.css';

class Form extends Component {
    render() {
        return (
            <div className="form">
                <form className="TodoForm" onSubmit={this.props.handleSubmit}>
                    <input name="title" type="text" placeholder="タイトル ※必須" defaultValue="reactの勉強" /><br/>
                    <textarea name="desc" placeholder="説明を入力" defaultValue="todoアプリを作っています！"></textarea><br/>
                    <button type="submit">Todoを作成</button>
                </form>
            </div>
        );
    }
}

export default Form;