/**
 *
 * Button
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonDefault = styled.button`
  padding: 10px;
  border: 1px solid #dfdfdf;
  display: block;
  width: 100%;
`;

function Button(props) {
  return <ButtonDefault {...props} />;
}

Button.propTypes = {};

export default Button;
