import React from 'react'
import { Box, Button, Typography } from '@material-ui/core'
import logo from '../../images/logo.png'

const AppScreen3 = (props) => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box textAlign="center">
        <Typography paragraph>
          Enviamos o link de acesso para o seu email ou telefone fornecido.
          Clique sobre ele para efetuar seu login (para fins de demonstração,
          finalize seu login clicando no botão abaixo).
        </Typography>
        <Box mb={1}>
          <Button
            disableElevation
            fullWidth
            variant="contained"
            color="primary"
            onClick={props.onShowAppScreen4}
          >
            Continuar
          </Button>
        </Box>
        <Box mb={1}>
          <Button
            fullWidth
            color="primary"
            onClick={props.onHideAppScreen3}
          >
            Voltar
          </Button>
        </Box>
      </Box>
    </>
  )
}

export default AppScreen3
