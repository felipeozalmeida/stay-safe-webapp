import React from 'react'
import { Box, Link, Typography } from '@material-ui/core'
import logo from '../../images/logo.png'

const AppScreen3 = (props) => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box textAlign="center">
        <Typography paragraph>
          Enviamos o link de acesso para o seu email ou telefone fornecido. Clique sobre ele para efetuar seu login.
        </Typography>
        <Link onClick={props.onHideAppScreen3}>
          Voltar
        </Link>
      </Box>
    </>
  )
}

export default AppScreen3
