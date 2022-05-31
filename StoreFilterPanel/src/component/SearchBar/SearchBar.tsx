import { Search } from '@mui/icons-material'
import React from 'react'
import s from "./searchbar.module.css"
interface ISearch{
value:string
searchBarHandler:(event:React.ChangeEvent<HTMLInputElement>)=>void
}


function SearchBar({value,searchBarHandler}:ISearch) {
  return (
    <div className={s.searchBar}>
      <Search/>
      <input className={s.searchBar__input} type="text" placeholder='Search'  value={value} onChange={(e)=>searchBarHandler(e)}/>
    </div>
  )
}

export default SearchBar