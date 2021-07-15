import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import {SortType} from '../../const';

function Sorting({sortType}) {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0">
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className="places__options places__options--custom places__options--opened">
        {Object.values(SortType).map((type) => (
          <li key={`Sort by ${type}`} className={classNames('places__option', {'places__option--active' : sortType === type})} tabIndex="0">{type}</li>
        ))}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

export {Sorting};
export default connect(mapStateToProps, null)(Sorting);
