import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const NotificationBag = ( {bagLength} ) => {
  return (
    <span className="notification">{bagLength}</span>
  );
}

const mapStateToProps = state => {
  return { bagLength: state.bag.length };
}

export default connect(mapStateToProps)(NotificationBag);