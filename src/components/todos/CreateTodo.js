import React, { Component } from 'react'
import { connect } from 'react-redux'

class CreateTodo extends Component {
  state = {
    todoInput: ""
  }

  handleInputChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.props.addToDo(this.state)
  }

  render() {
    return(
      <div>
        <form onSubmit={this.handleSubmit}>
          <p>
            <label>add todo</label>
            <input type="text" name="todoInput" value={this.state.todoInput} onChange={this.handleInputChange} />
          </p>
          <input type="submit" />
        </form>
        {this.state.todoInput}
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addToDo: formData => dispatch({type: "ADD_TODO", payload: formData})
  }
}

export default connect(null, mapDispatchToProps)(CreateTodo);
