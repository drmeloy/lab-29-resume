import React from 'react';
import PropTypes from 'prop-types';

const Projects = projects => {
  const projectsDisplay = projects.map(item => (
    <li>{item}</li>
  ));

  return(
    <>
      <h3>Projects</h3>
      <ul>{projectsDisplay}</ul>
    </>
  );
};

Name.PropTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects;
