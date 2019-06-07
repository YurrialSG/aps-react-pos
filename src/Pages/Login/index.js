import React, { Component } from 'react'
import Input from '../../components/Input'
import { login } from '../../services/auth'
import { setToken, getToken } from '../../helpers/auth'
import './Login.css'


class Login extends Component {
  state = {
    email: '',
    password: '',
    isLoading: false,
    hasError: false
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = async event => {
    event.preventDefault()
    const { email, password } = this.state
    this.setState({
      isLoading: true
    })
    try {
      const response = await login({
        email,
        password
      })
      this.setState({
        isLoading: false
      })
      setToken(response.data.token)
      this.props.history.push('/home')
      console.log(response)
      console.log(getToken())
    } catch (error) {
      console.log(error)
      this.setState({
        isLoading: false,
        hasError: true
      })
    }
  }

  render() {
    const { email, password, isLoading, hasError } = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} className='form'>
          {
            hasError &&
            <div className='erro'>
              Usuário/Senha incorreto(s)
            </div>
          }
          <h1>Login</h1>
          <Input
            type='email'
            name='email'
            value={email}
            placeholder="E-mail"
            onChange={this.handleChange}
          />
          <Input
            type='password'
            name='password'
            value={password}
            placeholder="Senha"
            onChange={this.handleChange}
          />
          <button>
            {
              isLoading
                ? 'Carregando...'
                : 'Entrar'
            }
          </button>
        </form>
      </div>
    )
  }
}

export default Login
