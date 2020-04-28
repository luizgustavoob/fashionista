import React from 'react';
import NumberFormat from 'react-number-format';

const MoneyFormat = ({value, displayType, className = ''}) => {
  return (
    <NumberFormat 
      className={className}
      value={value} 
      displayType={displayType} 
      prefix={'R$'} 
      thousandSeparator={'.'} 
      decimalSeparator={','} 
      decimalScale={2} 
      fixedDecimalScale={true} />
  );
}

export default MoneyFormat;