import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";
import BuildControls from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  bacon: 1.0,
  meat: 1.8
}

class BurgerBuilder extends Component {
    state = {
      ingredients: {
        salad:0,
        cheese:0,
        bacon:0,
        meat:0,
      },
      totalPrice: 4
    }

  // On peut aussi utiliser à la place de state:
  // constructor (props) {
  //   super(props);
  //   this.state = {...}
  // }

addIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  const UpdatedCount = oldCount +1;
  const updatedIngredients = {
    ...this.state.updatedIngredients
  };
  updatedIngredients[type] = UpdatedCount;
  const priceAddition = INGREDIENT_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice + priceAddition;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

}

removeIngredientHandler = (type) => {
  const oldCount = this.state.ingredients[type];
  const UpdatedCount = oldCount -1;
  const updatedIngredients = {
    ...this.state.updatedIngredients
  };
  updatedIngredients[type] = UpdatedCount;
  const priceDeduction = INGREDIENT_PRICES[type];
  const oldPrice = this.state.totalPrice;
  const newPrice = oldPrice - priceDeduction;
  this.setState({totalPrice: newPrice, ingredients: updatedIngredients})

}

  render () {
    return (
      <ReactAux>
        <Burger ingredients={this.state.ingredients}/>
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}/>
      </ReactAux>
    );
  }
}

export default BurgerBuilder;
