import React from 'react';
import { connect } from 'react-redux';
import './styles.css';

const NotificationBag = ({ bagLength }) => {
  return (
    <span className="notification">{bagLength}</span>
  );
}

const mapStateToProps = state => {
  return { bagLength: state.bag.reduce((acc, prod) => acc + prod.quantity, 0) };
}

export default connect(mapStateToProps)(NotificationBag);