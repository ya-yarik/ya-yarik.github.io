import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

const Slider = () => {
  return (
    <div>
          <Carousel >
    <Carousel.Item interval={1600}>
  
  
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Собачий шоколад</p>
        <img className='rounded' src="./img/chocodog.jpeg" width={'85%'}></img>
        <p>Цена: </p>
        <div >
            <span>100P / плитку</span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
  
    <Carousel.Item interval={1600}>
      
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Памперсы для птиц</p>
        <img className='rounded' src="./img/birdpamp.jpeg" width={'85%'}></img>
        <p >Цена: </p>
        <div >
            <span>200Р / упак.</span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее          
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={1600}>
      
    <div class="container py-3 ">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">


    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        <p>Пиво для собак</p>
        <img className='rounded' src="./img/dogbeer.jpeg" width={'85%'}></img>
        <p >Цена: </p>
        <div >
            <span>170Р / бут.</span>
            <button type="button" className="w-100 btn btn-lg btn-primary">Подробнее           
            </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

      <Carousel.Caption>
        <h3></h3>
        <p></p>
      </Carousel.Caption>
    </Carousel.Item>
    
    <Carousel.Item interval={1600}>
      
      
    <div class="container py-3">
      <main>
        <div className="row row-cols-1 justify-content-evenly row-cols-md-3 mb-3 row-cols-sm-2 text-center">
    
    <div className="col px-3">
    <div className="card mb-6 rounded-4 ">
      <div className="card-header py-3 px-3">
        
        <p class="attention">В подарок за покупку!</p>
        <img className='rounded' src="./img/spaotel.jpg" width={'85%'}></img>
        <div >
        <button type="button" className="w-100 btn btn-lg btn-primary" >Подробнее
        </button>
            
        </div>
      </div>
    </div>
   </div>
   </div>
  </main>
    </div>

    </Carousel.Item>

  </Carousel>

    </div>
  )
}

export default Slider