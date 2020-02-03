import React from 'react';
import PropTypes from 'prop-types';

const Skills = ({ skills }) => {  
  const skillsDisplay = skills.map((skill, i) => (
    <li key={i}>skill</li>
  ));

  return(
    <>
      <h2>Skills</h2>
      <ul>{skillsDisplay}</ul>
    </>
  );
};

Skills.propTypes = {
  skills: PropTypes.array.isRequired
}

export default Skills;
