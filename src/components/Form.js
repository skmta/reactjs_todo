import React, { Component } from 'react'
import '../css/form.css'

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form onSubmit={this.props.handleSubmit}>
          <input name="title" type="text" placeholder="title ※required"  /><br/>
          <textarea name="desc" placeholder="detail" ></textarea><br/>
          <button type="submit">add todo</button>
        </form>
      </div>
    )
  }
}

export default Form