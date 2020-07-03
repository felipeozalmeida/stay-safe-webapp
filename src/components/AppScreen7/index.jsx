import React from 'react'
import { Box, Button, Typography } from "@material-ui/core";

const AppScreen7 = () => {
  return (
    <>
      <Box mt={4}>
        <Typography align="center" variant="h5" paragraph>
          Gostaria de responder o questionário sobre doenças e sintomas?
        </Typography>
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="space-around">
        <Button
          disabled
          disableElevation
          variant="contained"
          color="primary"
        >
          Mais tarde
        </Button>
        <Button
          disableElevation
          variant="contained"
          color="primary"
        >
          Sim
        </Button>
      </Box>
    </>
  )
}

export default AppScreen7
