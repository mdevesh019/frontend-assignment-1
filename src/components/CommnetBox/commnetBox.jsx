import { Avatar, Paper, Box, Typography } from '@mui/material'
import { fontSize } from '@mui/system'
import React from 'react'

const CommnetBox = ({name, email, body}) => {
  return (
    <>
    <Paper sx={{padding:"10px", margin:"10px"}}>
        <Box sx={{display: 'flex', alignItems:"center", justifyContent:"start"}}>
            <Avatar >{name[0]}</Avatar>
            <Typography sx={{marginLeft:"10px", fontSize:"14px", fontWeight:"600" }}>
              {name}
            </Typography>
        </Box>
        <Typography sx={{fontSize:"12px",}}>
            {body}
        </Typography>
    </Paper>
    </>
  )
}

export default CommnetBox