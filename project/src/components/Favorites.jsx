import React from 'react'
import axios from 'axios'
import {AppContext} from '../App'
import FavGoods from './FavGoods'

const Favorites = (props) => {

  const context = React.useContext(AppContext)

  const onAddCart = (obj) =>{
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)
    context.setCart([...props.cart, obj]);
  }

  const onDeleteFavorites =(id)=>{
    
    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${id}`)
    props.setFavorites((favorites) => favorites.filter(item => item.id !==id));
}


  return (
    <div>
      <div>
        <h1 className='col-md-8 offset-md-5'>Избранное</h1>
      </div>
    <div>
      {
        props.favorites.map(obj =>{
          return(
            <FavGoods
            key={obj.id}
            id={obj.id}
            myId={obj.myId}
            title={obj.title}
            description={obj.description}
            price={obj.price}
            img={obj.img}
            
            onDeleteFavorites={
              (id)=>{
                onDeleteFavorites(id)
              }
            }

            onPlus={(cartobj)=>{
              onAddCart(cartobj)
            }
          }
            />

          )
        })
      }
      
    </div>

    </div>

  )
}

export default Favorites