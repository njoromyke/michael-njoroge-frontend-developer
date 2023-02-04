import { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.scss'
import axios from 'axios'
import { showNotification } from '../../helpers/utils/notification'
import Loader from '../../components/loader/loader'
import { storeLocally } from '../../helpers/utils/auth'
import { AUTH_USER, TOKEN } from '../../helpers/constants'

const Login = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const loginUser = (e) => {
    e.preventDefault()
    setLoading(true)
    axios
      .post('http://localhost:5000/api/users/login', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then((res) => {
        showNotification('Registration successful', 'success')
        storeLocally(AUTH_USER, res.data)
        storeLocally(TOKEN, res.data.token)
        window.location.reload()
        window.location.href = '/'
      })
      .catch((_err) => {
        showNotification(_err.response.data.message, 'error')
      })

      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      {loading && <Loader />}
      <div className='container'>
        <div className='row'>
          <div className='col-md-12 mt-5'>
            <h2 className='login-title text-center'>Login</h2>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='card'>
              <div className='card-body'>
                <form className='row' onSubmit={loginUser}>
                  <div className='col-md-12'>
                    <div className='form-group'>
                      <label htmlFor='email'>Email</label>
                      <input
                        type='email'
                        className='form-control'
                        id='email'
                        placeholder='Email'
                        name='email'
                        onChange={handleChange}
                        required
                      />

                      <div className='form-group mt-3'>
                        <label htmlFor='password'>Password</label>
                        <input
                          type='password'
                          className='form-control'
                          id='password'
                          placeholder='Password'
                          name='password'
                          onChange={handleChange}
                          required
                        />

                        <div className='col-md-12 mt-3'>
                          <button type='submit' className='btn btn-primary'>
                            Login
                          </button>
                        </div>
                        <div className='col-md-12 mt-3'>
                          <p>
                            Do not have an account?
                            <Link
                              to='/register'
                              href='/register'
                              className='ms-3'
                            >
                              Register
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
