import React from 'react'
import autoBind from 'react-autobind'

class BaseComponent extends React.Component {
  constructor(props) {
    super(props)
    autoBind(this)
  }
}

export default BaseComponent