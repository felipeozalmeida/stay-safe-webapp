import React from "react";
import { Box, Button } from "@material-ui/core";
import logo from "../../images/logo.png";

const AppScreen1 = (props) => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box mb={1}>
        <Button
          disabled
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
        >
          Continuar com Google
        </Button>
      </Box>
      <Box mb={1}>
        <Button
          disabled
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
        >
          Continuar com Facebook
        </Button>
      </Box>
      <Box mb={1}>
        <Button
          disableElevation
          fullWidth
          variant="contained"
          color="primary"
          onClick={props.onShowAppScreen2}
        >
          Entrar com email / telefone
        </Button>
      </Box>
    </>
  );
};

export default AppScreen1;
