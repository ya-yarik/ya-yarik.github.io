import React from 'react'
import AllGoods from './AllGoods'
import axios from 'axios';

const SetItems = (props) => {

  const onAddCart = async (obj)=>{
    try{
      const findCart = props.cart.find(objOver=>objOver.myId===obj.myId)

      if (findCart){
        axios.delete (`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${findCart.id}`)
        props.setCart ((over) => over.filter (o=>o.myId !== obj.myId))
      }
      else{
        const{data} = await axios.post ('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart', obj)

        props.setCart ([...props.cart, data])

      }
    }
    catch{
      alert ("Ошибка!")
    }
  }


  const onAddFavorites = async (obj)=>{
    try{
      const findFavorites = props.favorites.find(objFavorites=>objFavorites.myId===obj.myId)

      if (findFavorites){
        axios.delete (`https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites/${findFavorites.id}`)
        props.setFavorites ((over) => over.filter (o=>o.myId !== obj.myId))
      }
      else{
        const{data} = await axios.post ('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites', obj)

        props.setFavorites ([...props.favorites, data])

      }
    }
    catch{
      alert ("Ошибка!")
    }
  }

  return (
    <div className='container py-3'>
  
    { 
      props.item.map(obj=>{
        return(
           <AllGoods
           key={obj.id}
           id={obj.id}
           myId={obj.myId}
           title={obj.title}
           description={obj.description}
           price={obj.price}
           img={obj.img}

           favBtn={(favObj)=>{
            onAddFavorites(favObj)
           }}


           onPlus={(cartObj)=>{
            onAddCart(cartObj)

           }
          }
           />
        )
      })
    }
  </div>
  )
}

export default SetItems