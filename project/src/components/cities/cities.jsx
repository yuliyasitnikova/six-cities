import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

function Cities({cities, city, onChangeCity}) {
  const onItemClick = (evt) => {
    evt.preventDefault();
    const selectedCity = evt.target.textContent;
    if (selectedCity !== city) {
      onChangeCity(selectedCity);
    }
  };

  return (
    <section className="locations container">
      <ul className="locations__list tabs__list">
        {cities.map((cityName) => (
          <li key={`places-tab-${cityName.toLowerCase()}`} className="locations__item">
            <a className={classNames('locations__item-link tabs__item', {'tabs__item tabs__item--active': cityName === city})} href="#" onClick={onItemClick}>
              <span>{cityName}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}

Cities.propTypes = {
  cities: PropTypes.arrayOf(PropTypes.string).isRequired,
  city: PropTypes.string.isRequired,
  onChangeCity: PropTypes.func.isRequired,
};

export default Cities;
