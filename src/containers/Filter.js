import React, { Fragment, Component } from 'react';

const Filter = ({ handleRadio }) => {
  return (

    <Fragment>
    <strong>Sort by:</strong>
      <label>
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


    </Fragment>
  )
}

export default Filter
