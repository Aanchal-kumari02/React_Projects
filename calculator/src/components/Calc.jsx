import React, { useState } from 'react';
import Display from './Display';
import Button from './Button';

const Calc = () => {
  const [input, setInput] = useState('');

  const buttons = [
    { label: '+', value: '+', className: 'operator btn btn-info' },
    { label: '-', value: '-', className: 'operator btn btn-info' },
    { label: '×', value: '*', className: 'operator btn btn-info' },
    { label: '÷', value: '/', className: 'operator btn btn-info' },
    { label: '7', value: '7', className: 'btn btn-light waves-effect' },
    { label: '8', value: '8', className: 'btn btn-light waves-effect' },
    { label: '9', value: '9', className: 'btn btn-light waves-effect' },
    { label: '4', value: '4', className: 'btn btn-light waves-effect' },
    { label: '5', value: '5', className: 'btn btn-light waves-effect' },
    { label: '6', value: '6', className: 'btn btn-light waves-effect' },
    { label: '1', value: '1', className: 'btn btn-light waves-effect' },
    { label: '2', value: '2', className: 'btn btn-light waves-effect' },
    { label: '3', value: '3', className: 'btn btn-light waves-effect' },
    { label: '0', value: '0', className: 'btn btn-light waves-effect' },
    { label: '.', value: '.', className: 'decimal function btn btn-secondary' },
    { label: 'AC', value: 'all-clear', className: 'all-clear function btn btn-danger btn-sm' },
    { label: '=', value: '=', className: 'equal-sign operator btn btn-light'  },
  ];

  const handleClick = (value) => {
    if (value === 'all-clear') {
      setInput('');
    } else if (value === '=') {
      try {
        const evaluated = eval(input);
        setInput(evaluated.toString());
      } catch (error) {
        setInput('');
      }
    } else {
      setInput((prev) => prev + value);
    }
  };

  return (
    <div className="calculator card">
      <h1 className='mb-3'>React Calculator</h1>
      <Display input={input} />
      <div className="calculator-keys">
        {buttons.map((btn, index) => (
          <Button
            key={index}
            label={btn.label}
            value={btn.value}
            className={btn.className}
            onClick={handleClick}
          />
        ))}
      </div>
    </div>
  );
};

export default Calc;
