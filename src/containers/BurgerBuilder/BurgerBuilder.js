import React, { Component } from "react";
import ReactAux from "../../hoc/ReactAux";
import Burger from "../../components/Burger/Burger";

class BurgerBuilder extends Component {
    state ={
      ingredients: {
        salad:0,
        cheese:0,
        bacon:0,
        meat:0,
        cheese:0,
      }

    }

  // On peut aussi utiliser à la place de state:
  // constructor (props) {
  //   super(props);
  //   this.state = {...}
  // }

  render () {
    return (
      <ReactAux>
        <Burger ingredients={this.state.ingredients}/>
      </ReactAux>
    );
  }
}

export default BurgerBuilder;
