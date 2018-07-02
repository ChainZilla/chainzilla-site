import React from 'react';
import { connect } from "react-redux";
import { toggleNav } from '../../actions'

import './index.css';

const mapDispatchToProps = dispatch => {
    return {
          toggleNav: value => dispatch(toggleNav(value))
    };
  };

const Backdrop = ({toggleNav}) => (
    <div className="backdrop" onClick={() => toggleNav(false)} />
);

export default connect(null, mapDispatchToProps)(Backdrop);