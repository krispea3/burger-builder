import React from 'react';
import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const ingredientsSummary = Object.keys(props.ingredients)
        .map((igKey) => {
            return (
                <li key={igKey}> <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
                </li>
            );
        });

    return (
        <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
              {ingredientsSummary}
            </ul>
            <p>Total price: <strong>{props.price.toFixed(2)}US$</strong></p>
            <p>Continue to checkout?</p>

            <Button 
                btnType='Success' 
                clicked={() => {props.continue()}}
                >CONTINUE
            </Button>

            <Button 
                btnType='Danger' 
                clicked={props.cancel}
                >CANCEL
            </Button>
        </Aux>
    );
}

export default orderSummary;