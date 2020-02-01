import React from 'react';
import PropTypes from 'prop-types';

const Education = education => {
  const educationDisplay = education.map(item => (
    <li>{item}</li>
  ));

  return(
    <>
      <h3>Education</h3>
      <ul>{educationDisplay}</ul>
    </>
  );
};

Name.PropTypes = {
  education: PropTypes.array.isRequired
}

export default Education;
