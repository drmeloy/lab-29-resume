import React from 'react';
import PropTypes from 'prop-types';

const Summary = summary => {
  return(
    <>
      <h2>Summary</h2>
      <p>{summary}</p>
    </>
  );
};

Name.PropTypes = {
  summary: PropTypes.string.isRequired
}

export default Summary;
