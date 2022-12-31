import './index.css'

import {Component} from 'react'

class ThumbnaillItem extends Component {
  renderThumbnails = () => {
    const {imagesList, onClickUpdateId, selectedImageId} = this.props
    return imagesList.map(eachItem => {
      const {thumbnailUrl, thumbnailAltText, id} = eachItem

      const onClickThumbnail = () => {
        onClickUpdateId(id)
      }
      const buttonName =
        id === selectedImageId ? 'selected-list-item' : 'list-item'

      return (
        <li key={id} className={buttonName} onClick={onClickThumbnail}>
          <img
            src={thumbnailUrl}
            className="thumbnail-image"
            alt={thumbnailAltText}
          />
        </li>
      )
    })
  }

  render() {
    return (
      <div className="thumbnail-container">
        <h1 className="heading"> Nature Photography </h1>
        <p className="description"> Nature photography by rahul </p>
        <ul className="thumbnails-list-container">
          {this.renderThumbnails()}{' '}
        </ul>
      </div>
    )
  }
}

export default ThumbnaillItem
