import React from 'react'
import { data, raitinList } from '../../constants'
import CheckBox from '../commons/checkBox/CheckBox'
import ListToggle from '../commons/Listtoggle/ListToggle'
import { ICusines ,IFilterPanel} from '../intefaces/allInterfaces'
import SliderRail from '../slider/Slider'
import s from "./filter.module.css"




function FilterPanel({ price, priceHandler,checkBoxHandler, cusines, selectedCaegoryHandler, selectedCategory, setSelectedRaiting, seletedRaiting, }: IFilterPanel) {

  return (
    <div className={s.filter}>
      <div className={s.filter__category}>
        <p className={s.category__name}>Category</p>

        <ListToggle options={data} value={selectedCategory} selectToggle={selectedCaegoryHandler}  />
        <CheckBox cusines={cusines} checkBoxHandler={checkBoxHandler}></CheckBox>
        <p className={s.category__name}>Star Raitig</p>

        <ListToggle options={raitinList} value={seletedRaiting} selectToggle={setSelectedRaiting} />

        <SliderRail price={price} priceHandler={priceHandler} />

      </div>


    </div>
  )
}

export default FilterPanel