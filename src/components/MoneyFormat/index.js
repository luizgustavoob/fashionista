import React from 'react';

const MoneyFormat = ({value, className = ''}) => {    
  return (
    <span className={className}>{value}</span>
  );
};

export default MoneyFormat;