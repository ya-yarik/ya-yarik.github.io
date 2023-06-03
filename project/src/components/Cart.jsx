import React from 'react'
import CartAllObjects from './CartAllObjects'

const Cart = (props) => {
  return (   <div>
          <div>
        <h1 className='col-md-7 offset-md-5'>Корзина</h1>
      </div>
    <div>
      {
        props.cartProp.length>0?
        <div>
          {
            props.cartProp.map(obj =>{
              return(
               <CartAllObjects
               key={obj.id}
               id={obj.id}
               title={obj.title} 
               price={obj.price}
               img={obj.img}
               deleteItems={props.deleteItems}
               />
              )
            })
          }
          </div>

          :<h3 className='col-md-8 px-5 offset-md-4'>Корзина пуста</h3>

      }
      <div className='row'>
        <div className='col-md-4 offset-md-4'>
          <p class="summary">Итог: {props.totalPrice} рублей</p>
          <button class="buttonBuy"type='button' className='w-100 btn btn-lg btn-primary'>Купить</button>
          <p></p>

        </div>
      </div>
    </div>
  </div>
)
}

export default Cart