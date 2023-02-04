import './loader.scss'

const Loader = () => {
  return (
    <div className='loader'>
      <div className='spinner-border text-dark' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </div>
    </div>
  )
}

export default Loader
