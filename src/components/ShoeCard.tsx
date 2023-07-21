import { MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Shoe from "../types/Shoe";


type Props = {
  model: string
  stock: Shoe[]
};

const ShoeCard = (props: Props) => {
  
  const sizes = props.stock.reduce((sizes: number[], currentObject) => {
    if (!sizes.some((size) => size === currentObject.size)) {
      sizes.push(currentObject.size);
    }
    return sizes;
  }, []).sort();
  
  const colors = props.stock.reduce((colors: string[], currentObject) => {
    if (!colors.some((color) => color === currentObject.color)) {
      colors.push(currentObject.color);
    }
    return colors;
  }, []);

  

  const [quantity, setQuantity] = useState<number>(0);
  const [size, setSize] = useState<number>();
  const [color, setColor] = useState<string>();
  const handleSizeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(+event.target.value);
    const findShoe = props.stock.find(
      (shoe) => shoe.size === +event.target.value && shoe.color === color
    );
    if (findShoe) {
      setQuantity(findShoe.quantity);
    } else {
      setQuantity(0);
    }
  };
  const handleColorInput = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    const findShoe = props.stock.find(
      (shoe) => shoe.size === size && shoe.color === event.target.value
    );
    if (findShoe) {
      setQuantity(findShoe.quantity);
    } else {
      setQuantity(0);
    }
  };
  return (
    <Stack direction="row" spacing={2}>
      <Typography>Modello: {props.model}</Typography>
      {/* <TextField
        id="input-taglia"
        type="number"
        label="Taglia"
        variant="outlined"
        onChange={handleSizeInput}
      /> */}
        <TextField
          id="select-size"
          select
          label="Taglia"
          size="small"
          // defaultValue='40'
          onChange={handleSizeInput}
          // helperText="seleziona una taglia"
          sx={{width:'10ch'}}
        >
          {sizes.map((size) => (
            <MenuItem key={size} value={size}>
              {size}
            </MenuItem>
          ))}
        </TextField>
      {/* <TextField
        id="input-colore"
        label="Colore"
        variant="outlined"
        onChange={handleColorInput}
      /> */}
      <TextField
          id="select-color"
          select
          label="Colore"
          // defaultValue='white'
          onChange={handleColorInput}
          // helperText="seleziona una taglia"
          size="small"
          sx={{width:'15ch'}}
        >
          {colors.map((color) => (
            <MenuItem key={color} value={color}>
              {color}
            </MenuItem>
          ))}
        </TextField>
      <Typography>Quantità: {quantity}</Typography>
    </Stack>
  );
};

export default ShoeCard;
