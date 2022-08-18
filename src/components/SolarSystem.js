import React from 'react';
import Title from './Title';
// import PropTypes from 'prop-types'

class SolarSystem extends React.Component {
  render() {
    // const { item } = this.props;
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
      </div>
    );
  }
}

// SolarSystem.propTypes = {
//   item: PropTypes.string,
// };

export default SolarSystem;
