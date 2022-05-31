import { TempleBuddhist } from '@mui/icons-material'
import React from 'react'
import { IList } from '../intefaces/allInterfaces'
import s from "./list.module.css"
import ListItem from './listItem/listItem'
import ErrorIcon from '@mui/icons-material/Error';

function List({listItems,basketHandler}:IList) {

  
  return (
    <div className={s.list}>
      {listItems.map(item=><ListItem  key={item.id}item={item} basketHandler={basketHandler}/>)}
      {  !listItems.length&&<div style={{margin:"100px auto"}}>
        <ErrorIcon style={{color:"red",fontSize:"80px"}}/>
        <h1>Nothing found</h1>
        </div>}

    </div>
  )
}

export default List