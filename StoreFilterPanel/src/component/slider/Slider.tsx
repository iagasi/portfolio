
import { makeStyles } from '@mui/styles'
import Slider from '@mui/material/Slider';
import s from "./slider.module.css"
import React from 'react'
import { ISlider } from '../intefaces/allInterfaces';


const useStyles=makeStyles(()=>({
  root:{
    
  },
  thumb:{
    color:"black !important"
  },
  rail:{
    color:"red !important"
  },
  track:{
    color:"black !important" }

}))
const SliderRail = ({price,priceHandler}:ISlider) => {
  const classes=useStyles()
  return (
    <div className={s.slider}>
   
      <Slider
     onChange={(e,val)=>priceHandler(e,val)}
      value={price}
      valueLabelDisplay='on' 
      min={100}
      max={10000}
      classes={{
        thumb:classes.thumb,
        rail:classes.rail,
        track:classes.track
      }}
      />
    </div>
  )
}

export default SliderRail