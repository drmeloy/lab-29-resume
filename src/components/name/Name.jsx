import React from 'react';
import PropTypes from 'prop-types';

const Name = name => {
  return(
    <h1>{name}</h1>
  );
};

Name.PropTypes = {
  name: PropTypes.string.isRequired
}

export default Name;
