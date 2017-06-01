import React, { Component } from 'react';
import Setting from './setting';
import { controls } from './settingControls'


class Settings extends Component {
  render() {
    const settings = controls.map((control, idx) => {
      let name = control.name;
      return (
        <Setting
          className='setting'
          key={idx}
          name={name.toUpperCase()}
          value={this.props.filters[name]}
          min={control.min}
          max={control.max}
          onChange={(e) => this.props.onChange(e)}
        />
      )
    })
    return (
      <div className={this.props.className}>
        {settings}
      </div>
    );
  }
}

export default Settings;
