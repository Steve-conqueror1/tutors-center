import React from 'react';

import './SearchForm.scss';

const SearchForm = () => {
  return (
    <form className="header-bottom__form">
      <div className="header-bottom__search-form">
        <input type="text" placeholder="search tutors" />
        <button className="btn">
          <i className="fas fa-search-location"></i>
        </button>
      </div>
    </form>
  );
};

export default SearchForm;
