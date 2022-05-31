
import { ILlistItems } from '../../intefaces/allInterfaces'
import s from "./listItem.module.css"

import StarIcon from '@mui/icons-material/Star'; import { color } from '@mui/system';
import { useState } from 'react';
import MakeBig from '../../commons/makeBig/MakeBig';
import { useEffect } from 'react';
import { log } from 'console';
import { useRef } from 'react';
import { MutableRefObject } from 'react';

interface IItem {
    item: ILlistItems
    basketHandler:(action:string, item:ILlistItems)=>void
}
const ListItem = ({ item ,basketHandler}: IItem) => {
 
    const modalRef = useRef<any>()
    const closeRef = useRef<HTMLDivElement>()
    const [makeBig, setMakeBig] = useState<boolean>(false)
    const makeBigHandler = () => {
        setMakeBig(true)

    }


    const closeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (modalRef.current?.className == e.target.className) {
            setMakeBig(false)
        }

    }

    const closeIconHandler=()=>{
        setMakeBig(false)

    }
    return (
        <div className={s.listItem}  >
            <img className={s.listItem__img} src={item.coverSrc} alt="" onClick={makeBigHandler} />
            <div className={s.list__top} >
                <h3 className={s.list__description}>{item.title}</h3>

                <div className={s.list__raiting}>
                    {[...Array(item.rating)].map((el, i) => <StarIcon key={i} style={{ color: "gray" }} />)
                    }
                </div>


            </div>
            <div className={s.list__bottom}>
                <h2>
                    {item.price} $
                </h2>

            </div>
            {makeBig && <MakeBig item={item} close={closeHandler} modalRef={modalRef} closeIcon={closeIconHandler} basketHandler={basketHandler} />}

        </div>
    )
}

export default ListItem