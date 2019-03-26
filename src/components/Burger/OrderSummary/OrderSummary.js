import React from 'react';
import ReactAux from '../../../hoc/ReactAux';

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        <
        li><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients{igKey}}</li>
    })
  <li> salad : 1</li>
  return (
    <ReactAux>
    <h3>Your Order</h3>
    <p>Your self made burger with all these delicious ingredients :</p>
    <ul>

    </ul>
    </ReactAux>
  )
};

export default orderSummary
