import React from 'react'
import classes from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'
const controls=[
    {label:'Salad', type:'salad'},
    {label:'Seitan', type:'meat'},
    {label:'Cheese', type:'cheese'},
    {label:'Tofu', type:'chicken_breast'}
]
const buildControls = (props)=>(

    <div className={classes.BuildControls}>

        <p>To pay : <strong>{props.price.toFixed(2)} €</strong>  </p>

        {controls.map(ctrl=>(
            <BuildControl
             key={ctrl.label} 
             label={ctrl.label}
             added={()=>props.addIng(ctrl.type)}
             removed={()=>props.removeIng(ctrl.type)}
             infoDis={props.disInfo[ctrl.type]}/>
        ))}

        <button className={classes.OrderButton}>ORDER NOW</button>

    </div>

)


export default buildControls;