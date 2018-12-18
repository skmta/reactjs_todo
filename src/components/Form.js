import React, { Component } from 'react'
import '../css/form.css'

class Form extends Component {
  render() {
    return (
      <div className="form">
        <form>
          <input name="title" type="text" placeholder="title ※required" defaultValue="Enter the title" /><br/>
          <textarea name="desc" placeholder="detail" defaultValue="Enter the detail"></textarea><br/>
          <button type="submit">add todo</button>
        </form>
      </div>
    )
  }
}

export default Form