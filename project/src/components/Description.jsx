import React from 'react'
import {motion} from 'framer-motion'
import '../App.css'
import { alignPropType } from 'react-bootstrap/esm/types'
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Description = () => {
  return (
    <div class="main">

    <motion.div id="div10"
    initial={{
      x:-1000,
      opacity:0
    }}

    animate={{
      x:0,
      opacity:1
    }}

    transition={{
      delay:1,
      duration:2
    }}

    >Немного о большом!</motion.div>

    <motion.p id="initP"
    initial={{
     // x:-1000,
      opacity:0
    }}

    animate={{
   //   x:515,
      opacity:1
    }}

    transition={{delay:1, duration: 2, type:'tween'}}
    ><u>Преимущества</u> нашего магазина:</motion.p>

<div id='divImg'>
<motion.div id="div3"
    initial={{
      opacity:0,
      scale:0.5
    }}

    animate={{
      opacity:1,
      scale: 1
    }}

    transition={{
      duration:2
    }}
    ><motion.img
    src='/project/img/logoaboutus/3.gif'
    className='ball'
    width={'83%'}
    initial={{
      opacity:0.6
    }}
    transition={{
      duration:5
    }}
    whileHover={{
      scale:1.5,
      transition:{
        duration:5
      }
      }}
    /><p class="aboutus">Доставка товара "до двери"</p></motion.div>

<motion.div id="div4"
    initial={{
      opacity:0,
      scale:0.5
    }}

    animate={{
      opacity:1,
      scale: 1
    }}

    transition={{
      duration:2
    }}
    ><p id="initP2">Дружелюбная атмосфера и обслуживание</p><motion.img drag='x'
    src='/project/img/logoaboutus/4.gif'
    className='ball'
    width={'90%'}
    initial={{
      opacity:0.6
    }}
    transition={{
      duration:5
    }}
    whileDrag={{
      scale:1.5,
      }}
    /></motion.div>
</div>
    
    <motion.div id="div1" ><motion.img
    opacity={'0.1'}
    width={'30%'}
    src='/project/img/logoaboutus/1.jpg'
    alt=''
    //анимация
    animate={{rotate:360}}
    transition={{delay:2, duration:5, repeat: Infinity, repeatDelay:0.5, repeatType:'reverse'}}></motion.img><p class="aboutus">Находимся в Тверском регионе. Рядом с Вами, в каждом районе</p></motion.div>

    <motion.div id="div2"
    initial={{
      opacity:0
    }}

    animate={{
      y:0,
      opacity:1
    }}

    transition={{
      delay:1,
      duration:2
    }}
    ><p class="aboutus">В нашем магазине есть всё, как в Греции!</p><motion.img
    src='/project/img/logoaboutus/2.jpeg'
    className='banner'
    width={'33%'}
    initial={{
      opacity:0.6
    }}
    transition={{
      duration:5
    }}
    whileTap={{rotate:360}}
    /></motion.div>
    <p></p>

<Link to="/">
<motion.button id="button1" className='w-50 m-5 offset-md-1 btn btn-primary'
    whileHover={{
      scale:1.2
    }} src="/aboutus">Продолжить покупки</motion.button>
    </Link>
    <p></p>

    </div>
  )
}

export default Description