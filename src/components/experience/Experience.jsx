import React from 'react';
import PropTypes from 'prop-types';

const Experience = ({ experience }) => {
  const experiences = experience.map((item, i) => (
    <li key={i}>{item}</li>
  ));

  return(
    <>
      <h3>Experience</h3>
      <ul>{experiences}</ul>
    </>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired
}

export default Experience;
