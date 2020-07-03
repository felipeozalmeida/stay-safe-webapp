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
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  input: {
    display: 'none'
  },
  button: {
    borderRadius: '50%',
    padding: 0,
    textAlign: 'center'
  }
})

const AppScreen6 = () => {
  const classes = useStyles()
  const [date, setDate] = useState()
  const [image, setImage] = useState()

  return (
    <>
      <Box
        display="flex"
        alignItems="flex-start"
        justifyContent="center"
        my={4}
      >
        <input
          accept="image/*"
          className={classes.input}
          id="avatar-button-file"
          type="file"
        />
        <label htmlFor="avatar-button-file">
          <Button className={classes.button} component="div">
            <Avatar
              src=""
              style={{ width: 150, height: 150 }}
            >
              Adicionar Foto
            </Avatar>
          </Button>
        </label>
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
