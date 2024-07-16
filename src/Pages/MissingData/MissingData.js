import React from 'react'
import Input from '../../Components/Input/Input'
import Button from '../../Components/Button/Button'
import "./MissingData.css"

export default function MissingData() {
  // ! fix input type file issue
  return (
    <div className='row'>
      <div className="col-12 col-lg-2"></div>
      <div className='col-12 col-lg-8'>
        <h4 className='input-title mb-3'>Please Input your Excel Files here.</h4>
        <div className="d-flex flex-column flex-lg-row">
        <Input type="file"></Input>
        <div className='ms-lg-3 mt-3 mt-lg-0'><Button value="Upload" variant="outline" className="ms-3"></Button></div>
        </div>
      </div>
      <div className="col-12 col-lg-2"></div>
    </div>
  )
}
