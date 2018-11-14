import React, { Fragment, Component } from 'react';
import './Filter.css'
const Filter = ({ handleRadio }) => {
  return (

    <Fragment >
      <div className='filter'>
    <strong>Sort by:</strong>
      <label >
        <button type="button" name='name' value="Categories"  onClick={(event) => handleRadio(event)}>
        Categories
        </button>
      </label>
      <label>
        <button type="button" name='name' value="Rating" onClick={(event) => handleRadio(event)}>
        Rating
        </button>
      </label>
      <br/>
      </div>

    </Fragment>
  )
}

export default Filter
