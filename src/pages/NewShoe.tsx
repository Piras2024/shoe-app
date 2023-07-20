import { Box, Button, Grid, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import {Form} from 'react-router-dom'
type Props = {}

const NewShoe = (props: Props) => {
  return (

    // <Box
    //   component={Form}  //triggers action w/out reload
    //   sx={{
    //     '& > :not(style)': { m: 1, width: '25ch' },
    //     display:'flex',
    //     flexGrow: 1,
    //   }}
    //   noValidate
    //   autoComplete="off"
    // >
    <Box sx={{boxShadow:' rgba(0, 0, 0, 0.1) 20px 23px 6px -8px', borderRadius:'15px'}}>
      <Grid
      component={Form}
    container
    spacing={1}
    columns={3}
    // direction="row"
    alignItems="center"
    justifyContent="center"
    sx={{ margin:'8% auto', '& .MuiTextField-root': {width: '40ch' }}}
    rowSpacing={3}
    // columns={{ xs: 4, sm: 8, md: 12 }}
  >
      <Grid item xs={12} display='flex' justifyContent='center'>
        <Stack>
        <Typography variant='h4'>Lavorazione Lotto</Typography>
        <Typography variant='body1'>inserisci le informazioni del nuovo lotto</Typography>
        </Stack>
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-marca" label="Marca" variant="outlined"/>
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-taglia" label="Taglia" variant="outlined" />
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-prezzo" label="Prezzo" variant="outlined" type='number'/>
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-modello" label="Modello" variant="outlined" />
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-colore" label="Colore" variant="outlined" />
      </Grid>
      <Grid item xs display='flex' justifyContent='center'>
      <TextField id="in-colore" label="Quantità" variant="outlined" type='number'/>
      </Grid>
      <Grid item xs={12} justifyContent='center' display='flex' marginBottom='2ch'>
      <Button type='submit' variant="contained" endIcon={<SendIcon />}>Aggiungi</Button>
      
      </Grid>
    </Grid>
    </Box>
  )
}

export default NewShoe