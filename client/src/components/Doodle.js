import React, { Component } from 'react'
//import { render } from 'react-dom'
import { CompactPicker } from 'react-color'
import CanvasDraw from '../drawing/index'

class Doodle extends Component {
  state = {
    drawData: {
      color: '#ffc600',
      width: 400,
      height: 400,
      brushRadius: 10,
      lazyRadius: 12
    },
    formData: {
      title: '',
      description: '',
      doodleData: ''
    }
  }
  componentDidMount() {
    
  }

  render() {
    console.log('this.state.allArtwork ->', this.state.allArtwork)
    return (
      <div>
        <div>
          <button
            onClick={() => {
              // ? GET REQUEST PAYLOAD HERE ?
              localStorage.setItem(
                'savedDrawing',
                this.saveableCanvas.getSaveData(),
                console.log('save data', this.saveableCanvas.getSaveData())
              )
            }}
          >
            Save
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.clear()
            }}
          >
            Clear
          </button>
          <button
            onClick={() => {
              this.saveableCanvas.undo()
            }}
          >
            Undo
          </button>
          <div>
            <label>Width:</label>
            <input
              type="number"
              value={this.state.drawData.width}
              onChange={e =>
                this.setState({ drawData: { width: parseInt(e.target.value, 10) } })
              }
            />
          </div>
          <div>
            <label>Height:</label>
            <input
              type="number"
              value={this.state.drawData.height}
              onChange={e =>
                this.setState({ drawData: { height: parseInt(e.target.value, 10) } })
              }
            />
          </div>
          <div>
            <label>Brush-Radius:</label>
            <input
              type="number"
              value={this.state.drawData.brushRadius}
              onChange={e =>
                this.setState({ drawData: { brushRadius: parseInt(e.target.value, 10) } })
              }
            />
          </div>
          <div>
            <label>Lazy-Radius:</label>
            <input
              type="number"
              value={this.state.drawData.lazyRadius}
              onChange={e =>
                this.setState({ drawData: { lazyRadius: parseInt(e.target.value, 10) } })
              }
            />
          </div>
        </div>
        <CompactPicker 
          color={this.state.drawData.color}
          onChangeComplete={color => {
            this.setState({ drawData: { color: color.hex } })
          }}
        />
        <CanvasDraw
          ref={canvasDraw => (this.saveableCanvas = canvasDraw)}
          brushColor={this.state.drawData.color}
          brushRadius={this.state.drawData.brushRadius}
          lazyRadius={this.state.drawData.lazyRadius}
          canvasWidth={this.state.drawData.width}
          canvasHeight={this.state.drawData.height}
        />
      </div>
    )
  }
}
export default Doodle