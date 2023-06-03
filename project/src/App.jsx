import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Slider from './components/Slider';
import Footer from './components/Footer';
import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import SetItems from './components/SetItems';
import AllGoods from './components/AllGoods';
import{useState,useEffect} from 'react';
import axios from 'axios';
import Goods from './components/Goods';
import Favorites from './components/Favorites';
import Description from './components/Description';
import Cart from './components/Cart';
import Feedback from './components/Feedback';
import Aboutus from './components/Aboutus';
import React from 'react';
import { render } from '@testing-library/react';


export const AppContext = React.createContext({})

// const Apps = () => <div className="App">
//   <Router>
//     <div>
//       <Route exact path="/goods" component={AllGoods} />
//     </div>
//   </Router>
// </div>;

function App() {

  //переменные окружения
  //const array=[
  //   {
    // name:'shell',
    // value: process.env.REACT_APP_SHELL || 'Нет данных'
  //   },
  //   {
    // name:'env',
    // value: process.env.REACT_APP_ENV_FILE || 'Нет данных env'
  //   }
  // ]

  //примеры:
  //axios/get(process.env.REACT_APP_ENV_FILE+'/cart')
  //axios.get(process.env.REACT_APP_ENV_FILE)

  //тема 21. компоненты высшего порядка. счётчик
  //import Counter from './counter/Counter'
  //class App extends React.Component{
//state={
//   count:0,
//   text:'test'
// }
// render(){
//   const{count, text}=this.state
//   return(
//     <div>
//     <Counter count={count}
//     countDown={()=>this.setState({count: count-1})}
//     countUp={()=>this.setState({count: count+1})}
//     />
//     <Component
//     text={text}

//     inputChange={(value)=>this.setState({text:value})}
//     />
//     </div>
//   )
// }
 // }
 
 //export default App;

  const [goods, setGoods] = useState([])

  const [favorites, setFavorites] = useState([])

  const [cart, setCart] = useState([])

  useEffect(()=>{

    async function axiosData(){

      const goodsData = await axios.get('https://ya-yarik.github.io/itprojects/2023/rea/react/data.json')


      const favoritesData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/favorites')

      const cartData = await axios.get('https://637f91ca2f8f56e28e904e7d.mockapi.io/cart')

      setGoods(goodsData.data)
      setFavorites(favoritesData.data)
      setCart(cartData.data)

    }
    axiosData();


  // fetch('https://ya-yarik.github.io/itprojects/2023/rea/react/data.json').then(
  //   (myJson) => {
  //     return myJson.json();
  //   }).then((myJson)=>{
  //     setGoods(myJson);
  //   })
  },[])

  const deleteItems=(id)=>{

    axios.delete(`https://637f91ca2f8f56e28e904e7d.mockapi.io/cart/${id}`)

    setCart((objDelete)=>objDelete.filter(item=>item.id!==id))
  }

    const isAddCart=(myId)=>{
      return cart.some((objIsAdded)=>objIsAdded.myId === myId)
    }

    const isAddFavorites=(myId)=>{
      return favorites.some((objIsFavorites)=>objIsFavorites.myId === myId)
    }

  return (

    <AppContext.Provider value={
      {goods,
      setGoods,
      cart,
      setCart,
      favorites,
      setFavorites,
      isAddCart,
      isAddFavorites
      }
    }>


    <div>
      
      <Router>
      
      <Header></Header>

      {//переменнная окружения
      /* <div>
        {
          Array.map(({type,value}, index)=>(
            <div>
            <p>
              <b>
                Index:{index+1}
                </b>
                <b>
                  type:{type}
                </b>
                <b>
                  Value:{value}
                </b>
                </p>  
            </div>
          ))
        }
      </div> */}


      <Routes>
        
        <Route path='/'

        element={
          <div>
            <p class="mainheadtext">ТОП ТОВАРОВ</p>
            <Goods item={goods}
            favorites={favorites}
            setFavorites={setFavorites}
            cart={cart}
            setCart={setCart}
            />
          </div>
        
      }/>

        <Route path='/aboutus'
                                element={

                                <Aboutus/>
                                
                              }/>

        <Route path='/favorites'
                element={

                <Favorites
                favorites={favorites}
                setFavorites={setFavorites}
                item={goods}
                cart={cart}
                setCart={setCart}
                />
                
              }/>


        <Route path='/description'
                        element={

                        <Description/>
                        
                      }/>

        <Route path='/cart'
                        element={

                        <Cart
                        totalPrice={cart.reduce((element = cart.length, obj)=>
                          element=+obj.price, 0
                          )}
                        cartProp={cart}
                        deleteItems={deleteItems}
                        />
                        
                      }/>
        <Route path='/feedback'
                        element={

                        <Feedback/>
                        
                      }/>


     </Routes>

     </Router>

      {/* <Slider></Slider>
      <SetItems item={goods}/> */}

     <Footer></Footer>
    
     </div>

     </AppContext.Provider>


  );
}

export default App;