import React, { useRef } from 'react'
import Form2 from '../components/Form2'

function SelectBag() {

  const componentRef = useRef();

  return (
    <div>
        <Form2 reference={componentRef} />
    </div>
  )
}

export default SelectBag