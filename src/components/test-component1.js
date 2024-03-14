import React from 'react'

import PropTypes from 'prop-types'

import './test-component1.css'

const TestComponent1 = (props) => {
  return (
    <div className="test-component1-container">
      <h1 className="test-component1-text">{props.heading}</h1>
    </div>
  )
}

TestComponent1.defaultProps = {
  heading: 'Heading',
}

TestComponent1.propTypes = {
  heading: PropTypes.string,
}

export default TestComponent1
