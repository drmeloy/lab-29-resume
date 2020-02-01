import React from 'react';
import PropTypes from 'prop-types';

const Experience = experience => {
  const experiences = experience.map(item => (
    <li>{item}</li>
  ));

  return(
    <>
      <h3>Experience</h3>
      <ul>{experiences}</ul>
    </>
  );
};

Name.PropTypes = {
  experience: PropTypes.array.isRequired
}

export default Experience;
