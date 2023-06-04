import React, {useState} from 'react'

const FavGoods = (props) => {


    const [favorites, setFavorites ] = useState(false);
  
    const onClickAdd =()=>{
        setFavorites(!favorites);
        let id = props.id;
        let myId = props.myId;
        let title = props.title;
        let description = props.description;
        let price = props.price;
        let img = props.img;
        props.onPlus({title, description, price, img,id, myId});
    }

    const onDelete=()=>{
        props.onDeleteFavorites(props.id)
    }

  return (
    <div class="container">
    <div className='row row-cols-1 justify-content-evenly 
        row-cols-md-3 row-cols-sm-2 text-center'>
            <div className='col px-3 py-3'>
                <div className='card md-6 rounded'>
                    <div className='card-header py-2 px-3'>
             <button type='button' className='w-100 btn btn-lg btn-primary' 
             onClick={onDelete}>
                Удалить из избранного
             </button>
              
                        <p>{props.title}</p>
                        <img className='rounded' src={props.img} width={'85%'}></img>
                        <p>{props.description}</p>
                        <p>{props.price}</p>
                        <div>
                            <button type='button' className='w-100 btn btn-lg btn-primary'
                onClick={onClickAdd} > { favorites ?  
                <img width={13}
                 src={favorites ? '/project/img/icon.png':'' }
                 alt=""/>:'Добавить в корзину' }
               
                </button>
                        </div>
                        
                    </div>

                </div>

            </div>
        </div>
        </div>
  )
}

export default FavGoods