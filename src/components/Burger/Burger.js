 import React from 'react'
 import BurgerIngredient from './BurgerIngredients/BurgerIngredient';
 import classes from './Burger.css';
 
 const burger = (props)=>{ 

    let transformedIng=Object.keys(props.ingredient).map(
        ingred=>{
            return [...Array(props.ingredient[ingred])].map((_,i)=>{
                return <BurgerIngredient key={ingred+i} type={ingred}></BurgerIngredient>
            })
        }
    ).reduce((err,el)=>{
            return err.concat(el);
    },[])

    if(transformedIng.length===0){
        transformedIng=<small>Please start Adding Some ingredients!</small>
    }

    console.log(transformedIng)

    
    return(
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {transformedIng}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )

 };

 export default burger;