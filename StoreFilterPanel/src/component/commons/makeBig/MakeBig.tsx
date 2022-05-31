import { Button } from '@mui/material'
import React from 'react'
import { ILlistItems } from '../../intefaces/allInterfaces'
import s from "./makeBig.module.css"
import CloseIcon from '@mui/icons-material/Close';
import { MutableRefObject } from 'react';
interface x {
    item: ILlistItems
    close:(e :any)=>void
    closeIcon:()=>void
    modalRef:MutableRefObject<HTMLDivElement >|undefined
    basketHandler:(action:string,item:ILlistItems)=>void
 
}
const MakeBig = ({ item ,close,modalRef,closeIcon,basketHandler}: x) => {
   
    return (
        <div className={s.big} ref={modalRef} onClick={(e)=>close(e)} >
            <div className={s.big__container} >
                
                <CloseIcon className={s.closeIcon} onClick={()=>closeIcon()}  />

                <img className={s.big__img} src={item.coverSrc} alt="" />
                <div className={s.big__bottom}>
                    <h3>{item.title}</h3>
                    <div className={s.big__buy}>

                        <h3>{item.price} $</h3>
                        <Button variant="contained" color="success" onClick={()=>basketHandler("add",item)} >
                            Add to Basket
                        </Button>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default MakeBig