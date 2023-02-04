import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from '../../components/loader/loader'
import { AUTH_USER, TOKEN } from '../../helpers/constants'
import { storeLocally } from '../../helpers/utils/auth'
import { showNotification } from '../../helpers/utils/notification'
import './login.scss'

const Register = () => {
  const [formData, setFormData] = useState({})
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const registerUser = (e) => {
    e.preventDefault()
    setLoading(true)

    axios
      .post('http://localhost:5000/api/users', formData)
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
            <h2 className='login-title text-center'>Register</h2>
          </div>
          <div className='d-flex justify-content-center align-items-center'>
            <div className='card'>
              <div className='card-body'>
                <form className='row' onSubmit={registerUser}>
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
                            Register
                          </button>
                        </div>
                        <div className='col-md-12 mt-3'>
                          <p>
                            Have an account?
                            <Link to='/' className='ms-3'>
                              Login
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

export default Register
