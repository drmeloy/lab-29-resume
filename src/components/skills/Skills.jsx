import React from 'react';
import PropTypes from 'prop-types';

const Skills = skills => {
  const skillsDisplay = skills.map(skill => (
    <li>skill</li>
  ));

  return(
    <>
      <h2>Skills</h2>
      <ul>{skillsDisplay}</ul>
    </>
  );
};

Name.PropTypes = {
  skills: PropTypes.array.isRequired
}

export default Skills;
