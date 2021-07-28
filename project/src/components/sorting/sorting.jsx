import React, {useState} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {getSortType} from '../../store/ui/selectors';
import classNames from 'classnames/bind';
import {changeSort} from '../../store/actions';
import {SortType} from '../../const';

function Sorting() {
  const [openedStatus, setOpenedStatus] = useState(false);
  const sortType = useSelector(getSortType);
  const dispatch = useDispatch();

  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex="0" onClick={() => setOpenedStatus(!openedStatus)}>
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={classNames('places__options', 'places__options--custom', {'places__options--opened' : openedStatus})}
        onClick={({target}) => {
          dispatch(changeSort(target.textContent));
          setOpenedStatus(false);
        }}
      >
        {Object.values(SortType).map((type) => (
          <li key={`Sort by ${type}`} className={classNames('places__option', {'places__option--active' : sortType === type})} tabIndex="0">{type}</li>
        ))}
      </ul>
    </form>
  );
}

export default Sorting;
