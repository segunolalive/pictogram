import React from 'react';
import './setting.css';


function Setting (props) {
  return (
    <div className={props.className}>
      <div className='labels'>
        <div className='label-left'>{props.name}</div>
        <div className='label-right'>{props.value}</div>
      </div>
      <div className='range-field'>
        <input
          type='range'
          step={0.1}
          name={props.name}
          value={props.value}
          min={props.min}
          max={props.max}
          onChange={(e) => props.onChange(e)}
          />
      </div>

    </div>
  )
}

export default Setting;
