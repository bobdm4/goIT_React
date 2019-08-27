import React from 'react';
import PropTypes from 'prop-types'

const Profile = ({ name, email }) => (
  <>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </>
);

Profile.defaultProps = {
  name: 1,
}


Profile.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default Profile;