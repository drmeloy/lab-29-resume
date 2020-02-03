import React from 'react';
import PropTypes from 'prop-types';

const Education = ({ education }) => {
  const educationDisplay = education.map((item, i) => (
    <li key={i}>{item}</li>
  ));

  return(
    <>
      <h3>Education</h3>
      <ul>{educationDisplay}</ul>
    </>
  );
};

Education.propTypes = {
  education: PropTypes.array.isRequired
}

export default Education;
