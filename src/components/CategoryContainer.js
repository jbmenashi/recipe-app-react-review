import React from 'react'
import Category from './Category'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class CategoryContainer extends React.Component {
  render() {
    return (
      <div>{this.props.categories.map(cat => {
        return <Category handleClick={this.props.handleClick} key={cat.idCategory} {...cat}/>
      })}</div>
    )
  }
}

export default CategoryContainer
