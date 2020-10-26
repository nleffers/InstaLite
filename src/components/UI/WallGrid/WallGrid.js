import React from 'react'

import classes from './WallGrid.module.css'

const wallGrid = props => {
  const pictureRow = []
  const gridRowsArray = []

  props.pictures.forEach(pic => {
    pictureRow.push(pic)
    if (pictureRow.length === 3) {
      gridRowsArray.push(
        <div className={classes.WallGridRow}>
          {pictureRow.map(pic => (
            <div className={classes.Thumbnail}>
              <img src={pic.picture.url} alt="Thumbnail" />
            </div>
          ))}
        </div>
      )
      pictureRow.splice(0, 3)
    }
  })

  if (pictureRow.length > 0) {
    gridRowsArray.push(
      <div className={classes.WallGridRow}>
        {pictureRow.map(pic => (
          <div className={classes.Thumbnail}>
            <img src={pic.picture.url} alt="Thumbnail" />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className={classes.WallGrid} >
      {gridRowsArray}
    </div>
  )
}

export default wallGrid
