'use strict'

import React, {Component} from 'react'
import {shallow} from 'enzyme'
import logo from './logo.svg'

class App extends Component {
 constructor() {
   super()
    
   this.state = {
     displayText: false
   }
    
   this.renderText = this.renderText.bind(this)
 }
  
 handleClick(evt) {
   // console.log(evt)
   if (this.state.displayText) {
     this.setState({
       displayText: false
     })
   } else {
     this.setState({
       displayText: true
     })
   }
    
   /* refactor to a toggle:
   this.setState({
     displayText: !this.state.displayText
   }) */
 }
  
 renderText() {
   return (
     <div className='title'>
       <h2 style={{textAlign: 'center', marginTop: 25}}>Hello there, here is some text, check it out!</h2>
     </div>  
   )
 }

 render() {
   return (
     <div>
       <div style={{marginLeft: window.innerWidth / 2 - 120, marginTop: window.innerHeight / 2 - 56}} className='btn btn-cta spin' role='button'
         onClick={this.handleClick.bind(this)}>
          
         <svg viewBox='0 0 16 16' xmlns='http://www.w3.org/2000/svg' fillRule='evenodd' clipRule='evenodd' strokeLinejoin='round' strokeMiterlimit='1.414' src={logo}>
           <path d='M6.096 8c0-1.056.856-1.904 1.904-1.904S9.904 6.952 9.904 8 9.048 9.904 8 9.904 6.096 9.048 6.096 8zM8 0C4.264 0 1.136 2.56.248 6.016c-.008.024-.008.048-.008.08 0 .208.168.384.384.384h3.224c.152 0 .288-.088.344-.224.664-1.44 2.12-2.448 3.808-2.448 2.312 0 4.192 1.88 4.192 4.192 0 2.312-1.88 4.192-4.192 4.192-1.688 0-3.144-1-3.808-2.448-.064-.128-.192-.224-.344-.224H.624c-.208 0-.384.168-.384.384 0 .024.008.048.008.08C1.128 13.44 4.264 16 8 16c4.416 0 8-3.584 8-8s-3.584-8-8-8z' fillRule='nonzero'></path>
           </svg>
           <span>{this.state.displayText ? 'hide' : 'show'} the text</span>
       </div>
       {this.state.displayText ? this.renderText() : null}
     </div>
   )
 }
}

test('text does not display before clicking button', () => {
  const app = shallow(<App />),
    text = 'Hello there, here is some text, check it out!'

  expect(app.contains(text)).toEqual(false)
})

test('text does display after clicking button', () => {
  const app = shallow(<App />),
    text = 'Hello there, here is some text, check it out!'

  app.find('.btn').simulate('click')

  expect(app.contains(text)).toEqual(true)
})
