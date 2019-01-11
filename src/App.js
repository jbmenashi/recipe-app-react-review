import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import Header from './components/Header'
import CategoryContainer from './components/CategoryContainer'
import RecipeContainer from './components/RecipeContainer'

class App extends Component {

  state = {
    categories: [],
    recipes: [],
    myRecipes: [],
    inputValue: ""
  }

  handleClick = (event) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${event.target.id}`)
    .then(res => res.json())
    .then(data => {
      this.setState({
        recipes: data.meals
      })
    })
  }

handleRecipeClick = (idMeal) => {
  const foundRecipe = this.state.recipes.find(rec => rec.idMeal === idMeal)
  this.state.recipes.splice(this.state.recipes.indexOf(foundRecipe), 1)
  this.setState({
    recipes: this.state.recipes,
    myRecipes: [...this.state.myRecipes, foundRecipe]
  })
}

  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  categoriesToDisplay = () => {
    return this.state.categories.filter(c=>c.strCategory.includes(this.state.inputValue))
  }


  componentDidMount() {
    fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then(res => res.json())
    .then(data => {
      this.setState({
        categories: data.categories
      })
    })
  }

  render() {
    return (
      <div>
        <Header inputValue={this.state.inputValue} handleChange={this.handleChange}/>

        <Row>
          <Col s={4} className='grid-example'>
            <h4>Categories</h4>
            <CategoryContainer handleClick={this.handleClick} categories={this.categoriesToDisplay()}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>Recipes</h4>
            <RecipeContainer handleRecipeClick={this.handleRecipeClick} recipes={this.state.recipes}/>
          </Col>

          <Col s={4} className='grid-example'>
            <h4>My Recipes</h4>
            <RecipeContainer recipes={this.state.myRecipes}/>
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
