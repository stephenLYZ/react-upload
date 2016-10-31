import React from 'react'
import Dropzone from 'react-dropzone'
import request from 'superagent'
import './App.css'

const CLOUDINARY_UPLOAD_PRESET = 's9vtk4yj'
const CLOUDINARY_UPLOAD_URL = 'https://api.cloudinary.com/v1_1/stephenliu/upload'
const loading = ''

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      uploadedFile: null,
      uploaderFileUrl: ''
    }
  }

  onImageDrop(files) {
    this.setState({
      uploadedFile: files[0]
    })

    this.handleImageUpload(files[0])
  }

  handleImageUpload(file) {
    let upload = request.post(CLOUDINARY_UPLOAD_URL)
                     .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
                     .field('file', file)

    upload.end((err, response) => {
      if (err) {
        console.error(err)
      }

      if (response.body.secure_url !== '') {
        this.setState({
          uploaderFileUrl: response.body.secure_url
        })
      }
    })
  }

  render() {
    return (
      <form>
        <div className="FileUpload">
          <Dropzone
            onDrop={this.onImageDrop.bind(this)}
            multiple={false}
            accept="image/*"
            className="drop"
            >
            <div className="content">Drop an image or click to select a file to upload.</div>
          </Dropzone>
        </div>

            <div className="imageContainer">
              <div className="imageBorder">
                {this.state.uploaderFileUrl === '' ?
                  <div className="loading-container">
                      <div className="loading"></div>
                      <div id="loading-text">loading</div>
                  </div>
                  :
                  <img src={ this.state.uploaderFileUrl} />
                }
              </div>
              <div className="right">
                <div className="imageName">{this.state.uploaderFileUrl === '' ? 'imageName' : this.state.uploadedFile.name}</div>
                <input className="imageUrl" value={this.state.uploaderFileUrl === '' ? '   ' :this.state.uploaderFileUrl}></input>
              </div>
            </div>
      </form>
    )
  }
}
