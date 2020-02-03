import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ phone, email, sites }) => {
  const websites = sites.map((site, i) => (
    <li key={i}>{site}</li>
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

Contact.propTypes = {
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  sites: PropTypes.array.isRequired
}

export default Contact;
