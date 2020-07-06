import React from "react";
import { Box, Button, TextField } from "@material-ui/core";
import logo from "../../images/logo.png";

const AppScreen2 = (props) => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box mb={2}>
        <TextField
          fullWidth
          variant="outlined"
          size="small"
          label="Seu email ou telefone"
        />
      </Box>
      <Box mb={1}>
        <Button
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          onClick={props.onShowAppScreen3}
        >
          Continuar
        </Button>
      </Box>
      <Box mb={1}>
        <Button fullWidth color="primary" onClick={props.onHideAppScreen2}>
          Voltar
        </Button>
      </Box>
    </>
  );
};

export default AppScreen2;
