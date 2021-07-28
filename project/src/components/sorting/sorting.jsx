import React, {useCallback, useState} from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import {connect} from 'react-redux';
import {changeSort} from '../../store/actions';
import {SortType} from '../../const';

function Sorting({sortType, onChangeSort}) {
  const [openedStatus, setOpenedStatus] = useState(false);

  const onTypeClick = useCallback(() => {
    setOpenedStatus(!openedStatus);
  }, []);

  const onOptionsClick = useCallback(({target}) => {
    onChangeSort(target.textContent);
    setOpenedStatus(false);
  }, []);

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={onTypeClick}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul className={classNames('places__options', 'places__options--custom', {'places__options--opened' : openedStatus})} onClick={onOptionsClick}>
        {Object.values(SortType).map((type) => (
          <li key={`Sort by ${type}`} className={classNames('places__option', {'places__option--active' : sortType === type})} tabIndex="0">{type}</li>
        ))}
      </ul>
    </form>
  );
}

Sorting.propTypes = {
  sortType: PropTypes.string.isRequired,
  onChangeSort: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  sortType: state.sortType,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeSort(type) {
    dispatch(changeSort(type));
  },
});

export {Sorting};
export default connect(mapStateToProps, mapDispatchToProps)(Sorting);
