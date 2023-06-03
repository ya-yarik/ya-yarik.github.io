import React from 'react'
import Slider from './Slider';
import SetItems from './SetItems';


const Goods = (props) => {


  return (
    <div>      
    <Slider></Slider>
    <SetItems item={props.item}
    cart={props.cart}
    setCart={props.setCart}
    favorites={props.favorites}
    setFavorites={props.setFavorites}    
    />
    </div>
  )
}

export default Goods