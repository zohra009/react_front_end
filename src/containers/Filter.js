import React, { Fragment, Component } from 'react';
import './Filter.css'
import { Button } from 'semantic-ui-react'

const Filter = ({ handleRadio }) => {
  return (

    <Fragment >
      <div className='filter'>
    
      <label >
        <Button type="button" name='name' value="Categories"  onClick={(event) => handleRadio(event)}>
        Categories
      </Button>
      </label>
      <label>
        <Button type="button" name='name' value="Rating" onClick={(event) => handleRadio(event)}>
        Rating
      </Button>
      </label>
      <br/>
      </div>

    </Fragment>
  )
}

export default Filter
