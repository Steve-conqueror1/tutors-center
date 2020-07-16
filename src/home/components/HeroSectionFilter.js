import React from 'react';

import './HeroSectionFilter.scss';
const HeroSectionFilter = () => {
  return (
    <div className="container">
      <form id="filter-form" className="filter-form">
        <select className="subjects" name="subjects" form="filter-form">
          <option defaultValue="Select city">Select city</option>
          <option value="English">English</option>
          <option value="Maths">Maths</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
        </select>

        <select className="cities" name="cities" form="filter-form">
          <option defaultValue="Choose your city">Choose your city</option>
          <option value="Moscow">Moscow</option>
          <option value="St. PetersBurg">St. PetersBurg</option>
          <option value="Kazan">Kazan</option>
          <option value="Ekaterinaburg">Ekaterinaburg</option>
        </select>
        <button type="submit" className="btn-submit">
          <i className="fas fa-search-location"></i>Search
        </button>
      </form>
      <div className="change-city">
        <p>
          Your are not from Moscow? <span>Change City</span>
        </p>
      </div>
    </div>
  );
};

export default HeroSectionFilter;
