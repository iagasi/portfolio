import { Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { makeStyles } from '@mui/styles'

import React from 'react'
import { CheckBoxData } from '../../../constants'
import { ICheckbox } from '../../intefaces/allInterfaces'
import s from "./style.module.css"


const styles = makeStyles((theme) => ({
  root: {

    '&$checked': {
      color: 'black !important'
    }
  },
  checked: {}
}))




function CheckBox({ cusines,checkBoxHandler}: ICheckbox) {
  const classes = styles()
  return (
    <FormGroup
      className='fg'
    >
      {
        cusines.map(({ name, id, value }) =>
          <FormControlLabel
            key={id}
            className={s.formControl}

            control={<Checkbox
            onChange={()=>checkBoxHandler(id)}
              classes={{
                root: classes.root,
                checked: classes.checked,

              }}

            />}
            label={name} />
        )
      }
    </FormGroup>
  )
}

export default CheckBox