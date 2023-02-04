/* eslint-disable react/prop-types */
export function Rocket ({ rocket, onClick }) {
  return (
    <div className='col-md-6 col-lg-3' role='button'
    key={rocket.id}
    >
      <div className='card' onClick={onClick}>
        <img src={rocket.flickr_images[0]} alt='' className='card-img-top' />
        <div className='card-body'>
          <h4>{rocket.name}</h4>
          <p className='company'>
            {rocket.company}
            <span
              className={`badge ms-2 ${
                rocket.active ? 'bg-success' : 'bg-danger'
              }`}
            >
              {rocket.active ? 'Active' : 'Inactive'}
            </span>
          </p>
          <p className='description'>{rocket.description}</p>
        </div>
      </div>
    </div>
  )
}
