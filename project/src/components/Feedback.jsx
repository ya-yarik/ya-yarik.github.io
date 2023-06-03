import React from 'react'
import { useForm } from "react-hook-form";
import axios from 'axios';

const Feedback = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = (data) =>{
    axios.post('https://637f91ca2f8f56e28e904e7d.mockapi.io/form', data)
    alert('Заявка отправлена')
  }

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className='offset-md-1'>
    <div class='feedbackForm p-5 mt-5 offset-md-1'>
        <form onSubmit={handleSubmit(onSubmit)} >
          {/* register your input into the hook by invoking the "register" function */}
          
          <h1 class="deadlines">Обратная связь</h1>

          <div class="form-floating mb-3">
          <input 
          {...register
            ('Surname', 
              {
                required:false,
                maxLength:100,
                minLength:2,
                pattern: /^[a-zA-Zа-яА-Я]+$/
              }
            )
          }
          type="text"
          className="form-control"
          />
          <label>Фамилия</label>
          </div>

          <div class="errorFields">
          {errors?.Surname?.type==='maxLength'&&(<p>Поле 'Фамилия' не может содержать более 100 символов</p>)}
          {errors?.Surname?.type==='pattern'&&(<p>Поле 'Фамилия' заполнено некорректно</p>)}
          </div>
          
          {/*===*/}

          <div class="form-floating mb-3">
          <input 
          {...register
            ('Name', 
              {
                required:true,
                maxLength:100,
                minLength:2,
                pattern: /^[a-zA-Zа-яА-Я]+$/
              }
            )
          }
          type="text"
          className="form-control"
          />
          <label>Имя</label>
          </div>

          <div class="errorFields">
          {errors?.Name?.type==='required'&&(<p>Даже у ёжиков есть имена)). Поле 'Имя' обязательно для заполнения!!!</p>)}
          {errors?.Name?.type==='maxLength'&&(<p>Поле 'Имя' не может содержать более 100 символов</p>)}
          {errors?.Name?.type==='pattern'&&(<p>Поле 'Имя' заполнено некорректно</p>)}
          </div>

          {/*===*/}

          <div class="form-floating mb-3">
          <input 
          {...register
            ('Patronymic', 
              {
                required:false,
                maxLength:100,
                minLength:2,
                pattern: /^[a-zA-Zа-яА-Я]+$/
              }
            )
          }
          type="text"
          className="form-control"
          />
          <label>Отчество</label>
          </div>

          <div class="errorFields">
          {errors?.Patronymic?.type==='maxLength'&&(<p>Поле 'Отчество' не может содержать более 100 символов</p>)}
          {errors?.Patronymic?.type==='pattern'&&(<p>Поле 'Отчество' заполнено некорректно</p>)}
          </div>
          
          {/*===*/}

          <div class="form-floating mb-3">
          <input 
          {...register
            ('Email', 
              {
                required:true,
                maxLength:100,
                minLength:2,
                pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2}$/
              }
            )
          }
          type="email"
          className="form-control"
          />
          <label>Email</label>
          </div>

          <div class="errorFields">
          {errors?.Email?.type==='required'&&(<p>Поле 'Email' обязательно для заполнения</p>)}
          {errors?.Email?.type==='maxLength'&&(<p>Поле 'Email' не может содержать более 100 символов</p>)}
          {errors?.Email?.type==='pattern'&&(<p>Поле 'Email' заполнено некорректно</p>)}
          </div>

          {/*===*/}

          <div class="form-floating mb-3">
          <input 
          {...register
            ('Phone', 
              {
                required:false,
                maxLength:12,
                minLength:11,
                pattern: /^(([+7|7|8])+([0-9]){10})$/
              }
            )
          }
          type="text"
          className="form-control"
          />
          <label>Телефон</label>
          </div>

          <div class="errorFields">
          {errors?.Phone?.type==='maxLength'&&(<p>Поле 'Телефон' не может содержать более 12 символов</p>)}
          {errors?.Phone?.type==='minLength'&&(<p>Поле 'Телефон' не может содержать менее 11 символов</p>)}
          {errors?.Phone?.type==='pattern'&&(<p>Поле 'Телефон' заполнено некорректно</p>)}
          </div>
          {/*===*/}

          <input className='btn btn-outline-primary' type="submit" />
        </form>
        </div>

        </div>
  )
}

export default Feedback