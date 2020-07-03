import React, { useState } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Avatar
} from '@material-ui/core'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from '@date-io/date-fns'

const AppScreen6 = () => {
  const [date, setDate] = useState()

  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        my={4}
      >
        <Avatar
          src="https://picsum.photos/150"
          style={{ width: 150, height: 150 }}
        />
      </Box>
      <Box mb={2}>
        <TextField fullWidth label="Nome" />
      </Box>
      <Box mb={2}>
        <TextField fullWidth label="Email" />
      </Box>
      <Box mb={2}>
        <TextField fullWidth type="tel" label="Telefone" />
      </Box>
      <Box mb={2}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DatePicker
            disableFuture
            fullWidth
            format="dd/MM/yyyy"
            openTo="year"
            label="Data de nascimento"
            views={["year", "month", "date"]}
            value={date}
            onChange={setDate}
          />
        </MuiPickersUtilsProvider>
      </Box>
      <Box mb={4}>
        <FormControl component="fieldset">
          <FormLabel component="legend">Sexo</FormLabel>
          <RadioGroup row>
            <FormControlLabel
              control={<Radio color="primary" />}
              value="female"
              label="Feminino"
            />
            <FormControlLabel
              control={<Radio color="primary" />}
              value="male"
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>
      </Box>
      <Box display="flex" alignItems="flex-start" justifyContent="center" mb={2}>
        <Button
          disableElevation
          variant="contained"
          color="primary"
        >
          Confirmar
        </Button>
      </Box>
    </>
  )
}

export default AppScreen6
