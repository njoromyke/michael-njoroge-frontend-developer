import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CustomNav = () => {
  const ref = useRef(null)
  const [showMobileMenu, setShowMobileMenu] = useState(false)

  // apply class sticked to header when scroll
  useEffect(() => {
    const header = ref.current
    const sticky = header.offsetTop

    const scrollCallBack = window.addEventListener('scroll', () => {
      if (window.pageYOffset > sticky) {
        header.classList.add('sticked')
      } else {
        header.classList.remove('sticked')
      }
    })

    return () => {
      window.removeEventListener('scroll', scrollCallBack)
    }
  }, [])

  return (
    <>
      <header id='header' className='header fixed-top' ref={ref}>
        <div
          className={`container-fluid d-flex align-items-center justify-content-between ${
            showMobileMenu ? 'mobile-nav-active' : ''
          }`}
        >
          <Link
            to='/'
            className='logo d-flex align-items-center  me-auto me-lg-0'
          >
            <h1>SpaceX</h1>
          </Link>

          <nav id='navbar' className='navbar'>
            <ul>
              <li>
                <Link to='/' className='nav-link active'>
                  Home
                </Link>
              </li>
              <li>
                <Link to='/about' className='nav-link'>
                  About Us
                </Link>
              </li>
            </ul>
            {!showMobileMenu
              ? (
              <i
                className={`bi bi-list mobile-nav-toggle d-none  ${
                  showMobileMenu ? '' : ''
                }`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              ></i>
                )
              : (
              <i
                className={`bi bi-x mobile-nav-toggle d-none  ${
                  showMobileMenu ? '' : ''
                }`}
                onClick={() => setShowMobileMenu(!showMobileMenu)}
              ></i>
                )}
          </nav>

          <a className='btn-getstarted' href='index.html#about'>
            Get Started
          </a>
        </div>
      </header>
    </>
  )
}

export default CustomNav
