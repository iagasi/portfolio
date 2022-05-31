import React from 'react'
import s from "./basketItems.module.css"
import CloseIcon from '@mui/icons-material/Close';
import { IBasketItem } from '../../intefaces/allInterfaces';
import { Button } from '@mui/material';
interface IBasket {
    closeHandler: () => void
    basketItems: Array<IBasketItem>
    basketHandler: (action: string, item: IBasketItem) => void

}

const BasketItems = ({ closeHandler, basketItems, basketHandler }: IBasket) => {
    let total = basketItems.reduce((prev, curr) => {
        if (curr.amount!==undefined) {
            return prev + curr.price * curr.amount
        }
        return prev + curr.price
    }, 0)
    return (

        <div className={s.basketItems} onClick={()=>closeHandler()}>
            <div className={s.basketItems__container} onClick={(e)=>e.stopPropagation()}>
                <h3 className={s.basketItems__amount}>Totall Amount {total} $ </h3>

                <div className={s.basketItems__content}>
                    <div className={s.basketItems__left}>

                        {

                            basketItems.map(item =>
                                <main className={s.singleItem__main} >

                                    <div className={s.singleItem} key={item.id}>
                                        <img src={item.coverSrc} alt="" className={s.singleItem__img} />

                                        <div className={s.singleItem__title}>{item.title}</div>
                                        <div className={s.singleItem__price}>{item.price} $</div>

                                    </div>
                                    <div className={s.singleItem__amount}>



                                        <h3 > Total Price--{item.amount && item.price * item.amount}</h3>
                                    </div>
                                    <div className={s.singleItem__controll}>
                                        <div className={s.singleItem__changeCount}>
                                            <button className={s.singleItem__button} onClick={()=>basketHandler("add",item)}> + </button>
                                            <span className={s.singleItem__count}>{item.amount} </span>
                                            <button className={s.singleItem__button} onClick={()=>basketHandler("deleteOne",item)}>-</button>

                                        </div>
                                        <Button color="error" variant="contained" onClick={() => basketHandler("remove", item)}
                                        >Remove</Button>
                                    </div>
                                </main>

                            )
                        }


                    </div>
                </div>

                <div className={s.basketItems__close} onClick={() => closeHandler()}>
                    <CloseIcon />

                </div>
            </div>

        </div>

    )
}

export default BasketItems