import React from 'react'
import { NavLink } from 'react-router-dom';

import classes from './WallGrid.module.css'

const wallGrid = props => {
  const pictureRow = []
  const gridRowsArray = []

  props.pictures.forEach(pic => {
    pictureRow.push(pic)
    if (pictureRow.length === 3) {
      gridRowsArray.push(
        <div
          className={classes.WallGridRow}
          key={`${pic.id}-row`}
        >
          {pictureRow.map(pic => (
            <div
              className={classes.Thumbnail}
              key={pic.id}
            >
              <NavLink
                to={{
                  pathname: "/picture",
                  state: {
                    pictureId: pic.id,
                    pictureType: 'wide'
                  }
                }}
              >
                <img src={pic.url} alt="Thumbnail" />
              </NavLink>            </div>
          ))}
        </div>
      )
      pictureRow.splice(0, 3)
    }
  })

  if (pictureRow.length > 0) {
    gridRowsArray.push(
      <div
        className={classes.WallGridRow}
        key={`${pictureRow[0].id}-row`}
      >
        {pictureRow.map(pic => (
          <div
            className={classes.Thumbnail}
            key={pic.id}
          >
            <NavLink
              to={{
                pathname: "/picture",
                state: {
                  pictureId: pic.id,
                  pictureType: 'wide'
                }
              }}
            >
              <img src={pic.url} alt="Thumbnail" />
            </NavLink>
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
