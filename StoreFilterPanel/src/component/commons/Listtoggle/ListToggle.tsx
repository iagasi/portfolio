import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { makeStyles, } from '@mui/styles'
import React from 'react'
import s from "./listToggle.module.css"
interface IListToggle {
  options: any[];
  value: any,
  selectToggle: (event: any, value: string) => void
}
const useStyles = makeStyles(() => ({
  toggle: {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
 
    color:"red"
  },
  button: {
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12) !important',
    borderRadius: '10px !important ',
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:last-child)': {
      borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-groupedHorizontal:not(:first-child)': {
      borderRadius: '10px !important',
      border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.Mui-selected': {
      borderRadius: '10px !important',
      background: '#000 !important',
      color: '#fff !important',
    },
    '&.MuiToggleButton-root': {
      '&:hover': {
        background: '#000',
        color: '#fff',
      },
    },
  },
}))
function ListToggle({ options, value, selectToggle }: IListToggle) {
  

  const classes = useStyles()


  return (
    <ToggleButtonGroup
      value={value}
      onChange={selectToggle}
      className={classes.toggle}
      exclusive>
      {options.map(({ name, id, value }) => <ToggleButton className={classes.button} key={id} value={value}>{name}</ToggleButton>)}
   
    </ToggleButtonGroup>

  )
}

export default ListToggle