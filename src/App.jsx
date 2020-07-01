import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import logo from './images/logo.png';

function App() {
  return (
    <>
      <CssBaseline />
      <Container fixed maxWidth="xs">
        <Box display="flex" alignItems="start" justifyContent="center" my={2}>
          <img src={logo} alt="Logo do Stay Safe Webapp." />
        </Box>
        <Box mb={1}>
          <Button disableElevation fullWidth variant="contained" color="primary">
            Continuar com Google
          </Button>
        </Box>
        <Box mb={1}>
          <Button disableElevation fullWidth variant="contained" color="primary">
            Continuar com Facebook
          </Button>
        </Box>
        <Box mb={1}>
          <Button disabled disableElevation fullWidth variant="contained" color="primary">
            Entrar com email / telefone
          </Button>
        </Box>
      </Container>
    </>
  );
}

export default App;
