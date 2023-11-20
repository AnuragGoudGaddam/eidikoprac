import { Modal } from '@mui/material'
import React from 'react'
import Realtable from './table/realtable'


const CustomModal = ({openmodal,onClosemodal,children,}) => {
  return (
    <Modal sx={{display:"flex",justifyContent:"center",alignContent:"center",alignItems:"center",overFlow:"auto",}}
    
     open={openmodal} onClose={onClosemodal}
     >
  {children}
</Modal>
  )
}

export default CustomModal