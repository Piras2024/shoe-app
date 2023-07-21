import { Box, Card } from '@mui/material'
import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <Box display='flex' justifyContent='center'>
    <Card sx={{maxWidth:500}}>
      <img src='https://i.redd.it/nt1cyljtemg31.jpg' alt='pumped up kikcs' width='100%' style={{maxWidth:'500px'}}/>
    </Card>
    </Box>
  )
}

export default Home