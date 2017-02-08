import React, { PureComponent } from 'react'
import style from 'style/icon'
import { classes } from 'util/classnames'

export default function Icon({ name, size = '1rem' }) {
  if(process.env.NODE_ENV  === 'production') {
    return (
      <span className={classes(style.icon, style['icon-' + name])}
            style={{ maxWidth: size, maxHeight: size }} ></span>
    )
  } else {
    const Component = require('icon/' + name).default
    return (
      <Component className={classes(style.icon, style.iconImg)}
                 style={{ maxWidth: size, maxHeight: size }} />
    )
  }
}
