
import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import s from "./basket.module.css"
import { IBasketItem, ILlistItems } from '../intefaces/allInterfaces';
import { useState } from 'react';
import BasketItems from './BasketItems/BasketItems';

interface IBasket {
  basketHandler: (action: string, item: IBasketItem) => void
  basketItems: Array<IBasketItem>
}
export const Basket = ({ basketHandler, basketItems }: IBasket) => {
  const [show, setShow] = useState<boolean>(false)
  const closeHandler=()=>{
setShow(false)
  }
  return (
   < div>

     <div className={s.basket} onClick={() => setShow(true)}>
      <div className={s.basket__counter}>{basketItems.length}
      </div>

      <ShoppingBasketIcon className={s.basket__icon} />

     
 
    </div>
    {show&&<BasketItems closeHandler={closeHandler} basketItems={basketItems} basketHandler={basketHandler} />}
    
  </div>
  )
}
