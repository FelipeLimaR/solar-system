import React from 'react';
import PropTypes from 'prop-types';

function Title({ headline }) {
  return (
    <span>
      <h2 className="title-class">
        {headline}
      </h2>
    </span>
  );
}

Title.propTypes = {
  headline: PropTypes.string,
};

Title.defautProps = {
  headline: 'Ceres',
};

export default Title;
