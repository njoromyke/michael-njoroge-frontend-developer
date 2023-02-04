import Rocket from '../../assets/images/hero-1.png'
import './hero.scss'

const Hero = () => {
  return (
    <>
      <section
        id='hero-animated'
        className='hero-animated hero'
      >
        <div className='container position-relative'>
          <div className='row'>
            <div className='col-md-6 left-holder'>
              <div className='float-lg-start'>
                <h2>Welcome to SpaceT Ships</h2>
                <p>
                  We are here to provide you with the best ships in the world.
                </p>
                <div className='d-flex'>
                  <button className='btn-get-started'>Get Started</button>
                </div>
              </div>
            </div>
            <div className='col-md-6'>
              <img src={Rocket} className='img-fluid animated float-end' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Hero
