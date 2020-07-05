import React from 'react'
import { Box, Typography } from '@material-ui/core'
import logo from '../../images/logo.png'

const AppScreen11 = () => {

  const symptoms = [
    'Sintoma A',
    'Sintoma B',
    'Sintoma C',
    'Sintoma D',
    'Sintoma E',
  ]

  return (
    <>
      <Box
        display="flex"
        alignItems="start"
        justifyContent="center"
        mt={2}
        mb={4}
      >
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box mb={4}>
        <Typography variant="h5">
          Resumo semanal
        </Typography>
        <Typography>
          Graph
        </Typography>
      </Box>
      {symptoms.map((symptom, index) => (
        <Box mb={4} key={index}>
          <Typography variant="h5" gutterBottom>
            {symptom}
          </Typography>
          <Typography>
            Graph
          </Typography>
        </Box>
      ))}
    </>
  )
}

export default AppScreen11
