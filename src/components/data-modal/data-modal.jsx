import ModalTemplate from '../modal/modal-template'

/* eslint-disable react/prop-types */
const DataModal = ({ handleClose, data }) => {
  return (
    <ModalTemplate
      handleClose={handleClose}
      showCloseBtn
      title={data.name}
      size='lg'
    >
      <div className='row g-0'>
        {data.flickr_images.map((image, index) => (
          <div className='col-md-4' key={index}>
            <div className='card'>
              <img src={image} alt='img' loading='lazy' className='img-fluid' />
            </div>
          </div>
        ))}
        <div className='col-md-12'>
          <div className='card'>
            <div className='card-body'>
              <h4 className='card-title'>Description</h4>
              <p className='card-text'>{data.description}</p>
            </div>
          </div>
        </div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Height</div>
        </div>
        <div className='col-md-6 mt-2'>
          {data.height.meters} m / {data.height.feet} ft
        </div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Diameter</div>
        </div>
        <div className='col-md-6 mt-2'>
          {data.diameter.meters} m / {data.diameter.feet} ft
        </div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Mass</div>
        </div>
        <div className='col-md-6 mt-2'>
          {data.mass.kg} kg / {data.mass.lb} lb
        </div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>First flight</div>
        </div>
        <div className='col-md-6 mt-2'>{data.first_flight}</div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Country</div>
        </div>
        <div className='col-md-6 mt-2'>{data.country}</div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Cost per launch</div>
        </div>
        <div className='col-md-6 mt-2'>{data.cost_per_launch}</div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Success rate</div>
        </div>
        <div className='col-md-6 mt-2'>{data.success_rate_pct}%</div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Active</div>
        </div>
        <div className='col-md-6 mt-2'>
          {data.active
            ? (
            <span className='badge bg-success'>Active</span>
              )
            : (
            <span className='badge bg-danger'>Inactive</span>
              )}
        </div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Stages</div>
        </div>
        <div className='col-md-6 mt-2'>{data.stages}</div>
        <div className='col-md-6 mt-2'>
          <div className='card-title'>Boosters</div>
        </div>
        <div className='col-md-6 mt-2'>{data.boosters}</div>
        <div className='col-md-6 mt-2'>
            <div className='card-title'>Engines</div>
            </div>
            <div className='col-md-6 mt-2'>
            {data.engines.number} {data.engines.type}
            </div>
            <div className='col-md-6 mt-2'>
            <div className='card-title'>Landing legs</div>
            </div>
            <div className='col-md-6 mt-2'>
            {data.landing_legs.number} {data.landing_legs.material}
            </div>
      </div>
    </ModalTemplate>
  )
}

export default DataModal
