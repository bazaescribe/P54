// components/Title.js

import React from "react";
import PropTypes from 'prop-types';

const Title = ({ sectionText, titleText }) => {
  return (
    <div className="mb-100">
      <span className="text-secondary">{sectionText}</span>
      <h3>{titleText}</h3>
    </div>
  );
}

Title.propTypes = {
  sectionText: PropTypes.string.isRequired,
  titleText: PropTypes.string.isRequired,
};

export default Title;
