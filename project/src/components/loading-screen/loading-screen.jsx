// Thanks to Dev Ed https://www.youtube.com/watch?v=NZNhuzyeD-Y

import React from 'react';

function LoadingScreen() {
  return (
    <div className="preloader">
      <div className="preloader__image" role="img">
        <img className="preloader__plane" src="img/plane.png" alt="" />
        <img className="preloader__cloud preloader__cloud--first" src="img/cloud.png" alt="" />
        <img className="preloader__cloud preloader__cloud--second" src="img/cloud.png" alt="" />
        <img className="preloader__cloud preloader__cloud--third" src="img/cloud.png" alt="" />
      </div>
      <div className="preloader__container container">
        <h1 className="preloader__title">Loading ...</h1>
      </div>
    </div>
  );
}

export default LoadingScreen;
