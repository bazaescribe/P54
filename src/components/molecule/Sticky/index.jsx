import React from 'react';
import PropTypes from 'prop-types';
import styles from './Sticky.module.css';

const Sticky = ({ children }) => {
  return(
    <div className={styles.sticky}>{children}</div>
  );
};

Sticky.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Sticky;
