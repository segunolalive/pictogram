import React, { Component } from 'react';
import './imageContainer.css';

class ImageCanvas extends Component {
  render () {
    return (
      <div>
        <canvas
          id='canvas'
          width={600}
          height={400}
          style={this.props.style}
          filters={this.props.filters}
          ref={this.props.canvas}
        >
          <img src='' alt=''/>
        </canvas>
      </div>
    )
  }
}

class CanvasControls extends Component {
  render () {
    return (
      <div>
        <input type='file' id='file'
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
        />
        <a className='save'
          href={this.props.href}
          download={this.props.download}
          onClick={() => this.props.onClick()}
        >SAVE</a>
      </div>
    )
  }
}

class CanvasContainer extends Component {
  constructor (props) {
    super(props);
    this.state = { imageUrl: ''}
  }
  componentDidMount () {
    const ctx = this.canvas.getContext('2d');
    this.setState({ ctx });
  }

  componentDidUpdate (prevProps, prevState) {
    const ctx = this.state.ctx;
    ctx.filter = this.applyImageFilter(ctx, this.props.filters);
    if (prevProps !== this.props) {
      this.drawImage();
      this.setState((prevState, props) => {
        prevState['ctx'] = ctx;
        prevState['imageUrl'] = ctx.canvas.toDataURL();
        return prevState;
      });
    }
  }

  applyImageFilter = (ctx, filters) => {
    let canvasFilter = '';
    Object.keys(filters).forEach((key) => {
      switch (key) {
        case 'blur':
          canvasFilter += `${key}(${filters[key]}px) `;
          break;
        case 'hue':
          canvasFilter += `${key}-rotate(${filters[key]}deg) `;
          break;
        default:
          canvasFilter += `${key}(${filters[key]}%) `;
        }
      });
    return canvasFilter.trim();
  }

  drawImage = () => {
    var ctx = this.state.ctx;
    var canvas = ctx.canvas;
    var image = new Image();
    image.onload = () => {
      if (image.height > canvas.height) {
            image.width *= canvas.height/image.height;
            image.height = canvas.height;
          }
      if (canvas.width > image.width) {
        canvas.width = image.width;
      }
      if (image.width > canvas.width) {
        image.width *= canvas.width/image.width;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      ctx.drawImage(image, 0, 0, image.width, image.height);
    }
    image.src = this.props.href;
    this.forceUpdate();
  }

  saveImage = () => {
    const canvas = this.state.ctx.canvas;
    const imageUrl = canvas.toDataURL();
    this.setState((prevState, props) => {
      prevState['imageUrl'] = imageUrl;
      return prevState;
    });
  }

  render () {
    return (
      <div className={this.props.className}>
        <CanvasControls
          href={this.state.imageUrl}
          download={this.props.download}
          value={this.props.filename}
          onClick={this.saveImage}
          onChange={(e) => this.props.onChange(e)}
        />
        <ImageCanvas
          filters={this.props.filters}
          canvas={canvas => this.canvas = canvas}
        />
      </div>
    )
  }
}


export default CanvasContainer;
