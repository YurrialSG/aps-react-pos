import React, { Component } from 'react'
import './App.css'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <form className='form'>
          <label className='input-container' htmlFor='tarefa'>
            Tarefa
            <input
              id='tarefa'
              onChange={this.handleChange}
            />
            <button className='btn'>
              +
            </button>
          </label>
        </form>
      </div>
    )
  }
}

export default App