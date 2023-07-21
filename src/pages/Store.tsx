import React, { ChangeEvent, useState } from 'react'
import Shoe from '../types/Shoe'
import ShoeCard from '../components/ShoeCard'
import { Stack, TextField, Typography } from '@mui/material'
const DUMMY_SHOES = [
  new Shoe('Air max',42,'white',3),
  new Shoe('Air max',41,'white',2),
  new Shoe('Air max',40,'white',1),
  new Shoe('Air max',43,'black',3),
  new Shoe('Air max',42,'black',3),
  new Shoe('Air max',45,'black',3),
  new Shoe('Adidas samba',42,'green',3),
  new Shoe('Adidas samba',41,'green',2),
  new Shoe('Adidas samba',40,'green',1),
  new Shoe('Adidas samba',43,'white',3),
  new Shoe('Adidas samba',44,'white',3),
  new Shoe('Adidas samba',45,'white',3),
  // new Shoe('Nike Jordans',40,'black',5),
]

const DUMMY_MODELS: string[] =  DUMMY_SHOES.reduce((DUMMY_MODELS: string[], currentObject) => {
  if (!DUMMY_MODELS.some((model) => model === currentObject.model)) {
    DUMMY_MODELS.push(currentObject.model);
  }
  return DUMMY_MODELS;
}, []);

console.log(DUMMY_MODELS)

type Props = {}

const Store = (props: Props) => {

  return (
    <Stack spacing={2}>
      {DUMMY_MODELS.map((model)=><ShoeCard key={model} model={model} stock={DUMMY_SHOES.filter((shoe)=> shoe.model === model)}/>)}
    </Stack>
    
    
  )
}

export default Store