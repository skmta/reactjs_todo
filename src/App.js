import React, { Component } from 'react';
import TodoList from './components/TodoList';
import Form from './components/Form';
import './css/App.css'

//コンポーネントを作成
class App extends Component {

  constructor() {
    super()
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
          title: "Hello, Redux!",
          desc: "Reduxも始めました",
          done: false
        },
      ]
    }
  }

  render() {
    return (
      <div className="app">
        <h1>my todo app</h1>
        <TodoList
          todos={this.state.todos}
          />
        <Form />
      </div>
    );
  }
}

export default App
