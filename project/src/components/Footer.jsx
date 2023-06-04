import React from 'react'
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <div className='container'>
      <footer class="footer" className="py-5 my-5 p-4 border-top">
        <div className='col mb-3 row row-col-cols-1 row-cols-sm-2 row-cols-md-1'>
          <a className=''>
            <img src='/project/img/logo/1.jpg' className='bi me-2' width={100} height={100}></img><text class="foottext"> Магазин "Ёжик" - для людей и других животных </text>
            <img src='/project/img/logo/2.png' className='bi me-2' width={100} height={100}></img>
          </a></div>
          <div className='col mb-3 row row-col-cols-1 row-cols-sm-2 row-cols-md-3'>
          <div className='col mb-4'>
            <h5>Наш магазин</h5>
            <ul className='nav flex-column'><li className='nav-item mb-3'><a href="/aboutus" className='nav-link p-0 text-muted'>О магазине</a></li><li className='nav-item mb-3'><a href="/requisites" className='nav-link p-0 text-muted'>Реквизиты</a></li><li className='nav-item mb-3'><a href="/feedback" className='nav-link p-0 text-muted'>Контакты</a></li><li className='nav-item mb-3'><a href="/vacancies" className='nav-link p-0 text-muted'>Вакансии</a></li></ul>
          </div>

          <div className='col mb-4'>
            <h5>Помощь</h5>
            <ul className='nav flex-column'>
              
              <li className='nav-item mb-3'><a href="/pickup" className='nav-link p-0 text-muted'>Пункты выдачи</a></li>

              <li className='nav-item mb-3'><a href="/makeorder" className='nav-link p-0 text-muted'>Как сделать заказ?</a></li>

              <li className='nav-item mb-3'><a href="/payment" className='nav-link p-0 text-muted'>Оплата</a></li>

              <li className='nav-item mb-3'><a href="/delivery" className='nav-link p-0 text-muted'>Доставка</a></li>

              <li className='nav-item mb-3'><a href="/return" className='nav-link p-0 text-muted'>Возврат</a></li>

              <li className='nav-item mb-3'><a href="/rules" className='nav-link p-0 text-muted'>Условия обработки данных</a></li>
            
            </ul>
          </div>

          <div className='col mb-4 px-5'>
            <h5>Вход/Регистрация</h5>
            <ul className='nav flex-column'><li className='nav-item mb-3'><a href="/registration" className='nav-link p-0 text-muted'>Регистрация</a></li><li className='nav-item mb-3'><a href="/auth" className='nav-link p-0 text-muted'>Авторизация</a></li></ul>
          </div>

          </div>
          <logo>
            <a href="https://www.youtube.com/channel/UCxvq-8wL1qyR74tCo9AKslQ">
              <img src='/project/img/logo/YT.png' class="logoSN">
                </img>
                </a>
            
            <a href="https://ya-yarik.github.io"><img src='/project/img/logo/GH.jpg' class="logoSN"></img></a>
            <a href="tel:+79123456789"><img src='/project/img/logo/Phone.jpg' class="logoSN"></img></a>
            <a href="mailto:yarodex@yandex.ru"><img src='/project/img/logo/Letter.jpg' class="logoSN"></img></a>    
                </logo>

  </footer>
  </div>
  )
}

export default Footer