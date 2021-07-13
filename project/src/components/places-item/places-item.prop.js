import PropTypes from 'prop-types';

export default PropTypes.shape({
  city: PropTypes.shape({
    location: PropTypes.shape({
      latitude: PropTypes.number.isRequired,
      longitude: PropTypes.number.isRequired,
      zoom: PropTypes.number.isRequired,
    }),
    name: PropTypes.string.isRequired,
  }).isRequired,
  id: PropTypes.number.isRequired,
  isPremium: PropTypes.bool.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  previewImage: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
}).isRequired;
