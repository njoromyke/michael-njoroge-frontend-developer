/* eslint-disable react/prop-types */
const CustomSwitch = ({ label, handleChange, name, ...otherProps }) => {
  return (
    <div>
      <div className='form-check form-switch'>
        <input
          {...otherProps}
          className='form-check-input'
          type='checkbox'
          role='switch'
          id='flexSwitchCheckDefault'
          onChange={handleChange}
          name={name}
        />
        <label className='form-check-label' htmlFor='flexSwitchCheckDefault'>
          {label}
        </label>
      </div>
    </div>
  )
}

export default CustomSwitch
