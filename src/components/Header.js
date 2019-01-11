import React, { Fragment } from 'react'
import { Navbar } from 'react-materialize'

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Navbar brand='Recipe App' right />

        <div className='container'>
          <h5>Filter by Category:</h5>
          <input onChange={this.props.handleChange}type='text' value={this.props.inputValue} name="filter"/>
        </div>
      </Fragment>
    )
  }

}

export default Header

//capture input
//go through this.state.categories and create new array made up of included object with inout value
//set this.state.categories to that array
