import React from 'react'
import { render } from 'react-dom'
import Root from './components/index'
import SmartPhone from './components/smartPhone'

if (window.ontouchstart === null){
  render(<Root />, document.getElementById('root'))
} else {
  render(<SmartPhone />, document.getElementById('root'))
}
