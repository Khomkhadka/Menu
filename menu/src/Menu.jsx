import React from "react";
import {pizzaImg} from './assets/image'
const Menu = ()=>{
    const Data = [{
        img: pizzaImg.pizza1,
        pizzaName: "Chicago pizza",
        price: "$10",
        size:"large",
        stock: 12
      },
      {
         img: pizzaImg.pizza2,
        pizzaName: "Margherita pizza",
        price: "$12",
        size:"large",
        stock: 0
      },
      {
        img: pizzaImg.pizza2,
        pizzaName: "Margherita pizza",
        price: "$12",
        size:"large",
        stock: 6  
      },
      {
        img: pizzaImg.pizza2,
        pizzaName: "Margherita pizza",
        price: "$12",
        size:"large",
        stock: 0
      },{
        img: pizzaImg.pizza2,
        pizzaName: "Margherita pizza",
        price: "$12",
        size:"large",
        stock: 7
      }
    ]
      
      return (
        <> 
        <div className="flex flex-col items-center mt-4">
          <h1 className='offset-4'>MENU</h1>
          <p>Choose what u want to order</p>
          </div>
    
          <div className='grid grid-cols-4 mt-20 w-70% p-22'>
       {
          Data.map((data) =>(
               <div>
              
                  <div className="border p-4 mb-4 w-64 rounded shadow ">
                    <img src={data.img} className={(data.stock>0)?"":'grayscale'} />
                   <p className='font-bold underline md:underline'>{(data.stock > 0)?"#Available":<span className=' text-red-400' >#Sold Out</span>}</p>
                    <p>Name:{data.pizzaName}</p>
                    <p>size:{data.size}</p>
                    <p>Price:{data.price}</p>
                    <p>In stock:{data.stock}</p>
                   </div>
               </div>
                 ))
        }
          </div>
       </> 
      )
}
export default Menu