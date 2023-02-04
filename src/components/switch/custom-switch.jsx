import { Form } from 'react-bootstrap'

/* eslint-disable react/prop-types */
const CustomSwitch = ({ label, handleChange, name, ...otherProps }) => {
  return (
    <div>
      <div className='form-check form-switch'>
        <Form.Check
          type='switch'
          label={label}
          id='disabled-custom-switch'
          name={name}
          onChange={handleChange}
          {...otherProps}
        />
      </div>
    </div>
  )
}

export default CustomSwitch
