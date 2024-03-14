import React from 'react'

import PropTypes from 'prop-types'

import './chelsie.css'

const Chelsie = (props) => {
  return (
    <div className="chelsie-container">
      <span className="test-css-class">{props.text}</span>
    </div>
  )
}

Chelsie.defaultProps = {
  text: 'Text',
}

Chelsie.propTypes = {
  text: PropTypes.string,
}

export default Chelsie
