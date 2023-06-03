import React from 'react'
import { Carousel } from 'react-bootstrap'
import {AppContext} from '../App';
import{useState,useEffect} from 'react';

const AllGoods = (props) => {

  const context=React.useContext(AppContext);

  const[addedCart, setAddedCart]=useState(context.isAddCart);
 
  const[favorites, setFavorites]=useState(false);

  const onClickFavorites=()=>{
    setFavorites(!favorites);
    let id = props.id;
    let myId=props.myId;
    let title=props.title;
    let description=props.description;
    let price=props.price;
    let img=props.img;
    props.favBtn({title, description, price, img, id, myId});
  }

    const onClickAddCart=()=>{
      setAddedCart(!addedCart);
      let id = props.id;
      let myId=props.myId;
      let title=props.title;
      let description=props.description;
      let price=props.price;
      let img=props.img;
      props.onPlus({title, description, price, img, id, myId});
    }

  return (


    <div>
      
      <Carousel>    
      <Carousel.Item interval={1600}>
      
      
    <div class="container py-3">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">
    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>{props.title}</p>
        <img className='rounded' src={props.img} width={'85%'}></img>
        <p>{props.description}</p>
        <p>{props.price}</p>
      <div >
      <button type="button" className="w-100 btn btn-lg btn-primary" >Подробнее
      </button>
      
          <p></p>

{
          context.isAddFavorites(props.myId)==true?

          <button type="button" className="w-100 btn btn-lg btn-primary" onClick={onClickFavorites}>Добавлен в избранное
          </button>
          :
          <button type="button" className="w-100 btn btn-lg btn-primary" onClick={onClickFavorites}>Добавить в избранное
          </button>

        }
        <p></p>

          <button type="button" className="w-100 btn btn-lg btn-primary" onClick={onClickAddCart}>{context.isAddCart(props.myId)?
          <img width={15}
          src={context.isAddCart(props.myId)? '/img/icon.png':''}
          alt=""/>:'Добавить в корзину'}
          </button>
          

        </div>
        
      </div>
      
    </div>
    
   </div>
   
   </div>
   
  </main>
  
    </div>

    </Carousel.Item></Carousel></div>
    
    
  )
}

export default AllGoods