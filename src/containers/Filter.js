import React, { Fragment, Component } from 'react';

const Filter = ({ handleRadio, sortBy }) => {
  return (
    <Fragment>
    <strong>Sort by:</strong>
      <label>
        <input type="radio" name='name' value="Categories" checked={sortBy === "Categories"} onChange={(event) => handleRadio(event)}/>
        Categories
      </label>
      <label>
        <input type="radio" name='name' value="Rating" checked={sortBy === "Rating"} onChange={(event) => handleRadio(event)}/>
        Rating
      </label>
      <br/>


    </Fragment>
  )
}

export default Filter
