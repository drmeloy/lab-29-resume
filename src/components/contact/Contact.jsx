import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ phone, email, sites }) => {
  const websites = sites.map(site => (
    <li>{site}</li>
  ));

  return(
    <>
      <h2>Contact</h2>
      <p>{phone}</p>
      <p>{email}</p>
      <ul>{websites}</ul>
    </>
  );
};

Name.PropTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  sites: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Contact;
