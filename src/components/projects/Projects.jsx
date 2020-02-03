import React from 'react';
import PropTypes from 'prop-types';

const Projects = ({ projects }) => {
  const projectsDisplay = projects.map((item, i) => (
    <li key={i}>{item}</li>
  ));

  return(
    <>
      <h3>Projects</h3>
      <ul>{projectsDisplay}</ul>
    </>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired
}

export default Projects;
