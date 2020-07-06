import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import logo from "../../images/logo.png";

const AppScreen4 = (props) => {
  return (
    <>
      <Box display="flex" alignItems="start" justifyContent="center" my={2}>
        <img src={logo} alt="Logo do Stay Safe Webapp." />
      </Box>
      <Box textAlign="center">
        <Typography paragraph>Autenticando...</Typography>
      </Box>
      <Button
        disableElevation
        fullWidth
        variant="contained"
        color="primary"
        onClick={props.onShowAppScreen5}
      >
        Continuar
      </Button>
    </>
  );
};

export default AppScreen4;
