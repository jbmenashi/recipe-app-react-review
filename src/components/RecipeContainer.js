import React from 'react'
import Recipe from './Recipe'
import v4 from 'uuid' // another way of generating unique ids (useful for keys)

class RecipeContainer extends React.Component {
  render() {
    return (
      <div>{this.props.recipes.map(rec => {
        return <Recipe key={rec.idMeal} handleRecipeClick={this.props.handleRecipeClick} {...rec}/>
      })}</div>
    )
  }
}

export default RecipeContainer
