import React, { Component } from 'react';
import Aux from '../../hoc/Auxi';
import Burger from '../../components/Burger/Burger'
import BuildControls from './../../components/Burger/BuildControls/BuildControls'

const ingredientPrices = {
    meat: 1.5,
    chicken_breast: 1,
    salad: 0.5,
    cheese: 0.5
}


class BurgerBuilder extends Component {

    state = {
        ingredients: {
            salad: 0,
            meat: 0,
            chicken_breast: 0,
            cheese: 0
        },
        totalPrice: 3,
        purshasable : false

    }
    addIngredientHandler = (type) => {
        const addedPrice = ingredientPrices[type];
        console.log('addedPrice : ' + addedPrice)
        const oldPrice = this.state.totalPrice;
        console.log('OldPrice : ' + oldPrice)
        const newPrice = oldPrice + addedPrice;
        console.log('newPrice is : ' + newPrice)
        const oldCount = this.state.ingredients[type];
        const newCount = oldCount + 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })


    }

    removeIngredientHandler = (type) => {
        const lostPrice = ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - lostPrice;
        const oldCount = this.state.ingredients[type];
        if(oldCount<=0){
            return;
        }
        const newCount = oldCount - 1;
        const updatedIngredients = { ...this.state.ingredients }
        updatedIngredients[type] = newCount;
        this.setState({ ingredients: updatedIngredients, totalPrice: newPrice })
    }

    render() {
        const disabledInfo = {
            ...this.state.ingredient
        }
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
            console.log(disabledInfo[key])
        }
        return (
            <Aux>
                <Burger ingredient={this.state.ingredients} />
                <BuildControls addIng={this.addIngredientHandler} removeIng={this.removeIngredientHandler}
                disInfo={disabledInfo} price={this.state.totalPrice}></BuildControls>
            </Aux>
        );
    }
}
export default BurgerBuilder;