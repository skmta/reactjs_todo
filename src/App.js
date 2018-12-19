import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './css/App.css'

//コンポーネントを作成
class App extends Component {

  constructor() {
    super()
    const todos = [
    ]
    this.state = {
      todos: todos,
      //Todoの数をカウントする
      countTodo: todos.length + 1,
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const title = e.target.title.value;
    if (!title) {
      alert("Enter the title");
      return;
    }
    const desc = e.target.desc.value;
    const todos = this.state.todos.slice()
    const countTodo = this.state.countTodo

    todos.push({
      id: countTodo,
      title: title,
      desc: desc,
      done: false,
    });

    this.setState({ todos })
    this.setState({ countTodo: countTodo + 1 })


    e.target.title.value = '';
    e.target.desc.value = '';
  }

  //Todoの完了/未完了を切り替える
  setTodoStatus(clickTodo) {
    const todos = this.state.todos.slice();
    const todo = todos[clickTodo.id - 1];
    todo.done = !todo.done;
    todos[clickTodo.id - 1] = todo;

    this.setState({ todos });
  }

  render() {
    return (
      <div className="app">
        <h1>my todo app</h1>
        <Form handleSubmit={this.handleSubmit.bind(this)} />
        <TodoList
          todos={this.state.todos}
          setTodoStatus={this.setTodoStatus.bind(this)}
          />
      </div>
    );
  }
}

export default App
