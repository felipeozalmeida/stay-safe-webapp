import React from 'react'
import { Box, Typography } from '@material-ui/core'
import logo from '../../images/logo.png'

const AppScreen4 = () => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box textAlign="center">
        <Typography paragraph>
          Autenticando...
        </Typography>
      </Box>
    </>
  )
}

export default AppScreen4
