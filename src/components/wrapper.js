import React, { Component } from 'react';
import Settings from './settings';
import CanvasContainer from './imageContainer';
import Header from './header';
import './wrapper.css';


class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      filters: {
        hue: 0,
        contrast: 100,
        brightness: 100,
        saturate: 100,
        sepia: 0,
        invert: 0,
        grayscale: 0,
        blur: 0,
        opacity: 100,
      },
      imageUrl: '',
      fileSrc: '',
    };
  }

  handleSettingsChange = (e) => {
    const control = e.target.name.toLowerCase();
    const value = e.target.value;
    this.setState((prevState, props)=>{
      prevState.filters[control] = value;
      return prevState;
    });
  }

  uploadImage = (e) => {
    const input = e.target;
    if (input.files.length === 0) return;
    const type = input.files[0].type;
    if (!type.match(/image.*/)) {
      console.log('file is not a valid image', type);
      return;
      // TODO: inform user that file is not a valid image
    }
    var reader = new FileReader();
    reader.onload = (e) => {
      this.setState({
        dataUri: e.target.result,
        fileSrc: input.value,
        filename: input.files[0].name,
        type: type,
      })
    }
    reader.readAsDataURL(input.files[0]);
  }

  render () {
    return (
      <div>
        <Header />
        <div className='wrapper'>
          <Settings className='sidebar'
            filters={this.state.filters}
            onChange={this.handleSettingsChange}
          />
          <div className='main-area'>
            <div>
              <h3>Upload your Photo. Adjust filters as desired. And Save. Enjoy!</h3>
            </div>
            <CanvasContainer className='drop-target'
              href={this.state.dataUri}
              download={this.state.filename}
              onChange={this.uploadImage}
              filters={this.state.filters}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Wrapper;
