import { Card, CardContent, MenuItem, Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Shoe from "../modules/Shoe";

type Props = {
  model: string;
  stock: Shoe[];
};

const ShoeCard = (props: Props) => {
  const sizes = props.stock
    .reduce((sizes: number[], currentObject) => {
      if (!sizes.some((size) => size === currentObject.size)) {
        sizes.push(currentObject.size);
      }
      return sizes;
    }, [])
    .sort();

  const colors = props.stock.reduce((colors: string[], currentObject) => {
    if (!colors.some((color) => color === currentObject.color)) {
      colors.push(currentObject.color);
    }
    return colors;
  }, []);
  const [quantityAndCost, setQuantityAndCost] = useState<number[]>([0, 0]);
  const [size, setSize] = useState<number>();
  const [color, setColor] = useState<string>();
  const handleSizeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(+event.target.value);
    const findShoe = props.stock.find(
      (shoe) => shoe.size === +event.target.value && shoe.color === color
    );
    if (findShoe) {
      setQuantityAndCost([findShoe.quantity, findShoe.price]);
    } else {
      setQuantityAndCost([0, 0]);
    }
  };
  const handleColorInput = (event: ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    const findShoe = props.stock.find(
      (shoe) => shoe.size === size && shoe.color === event.target.value
    );
    if (findShoe) {
      setQuantityAndCost([findShoe.quantity, findShoe.price]);
    } else {
      setQuantityAndCost([0, 0]);
    }
  };
  return (
    <Card >
      <CardContent>

    <Stack direction="row" spacing={2}>
      <Typography>Modello: {props.model}</Typography>
      <TextField
        id="select-size"
        select
        label="Taglia"
        size="small"
        // defaultValue='40'
        onChange={handleSizeInput}
        sx={{ width: "10ch" }}
      >
        {sizes.map((size) => (
          <MenuItem key={size} value={size}>
            {size}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="select-color"
        select
        label="Colore"
        // defaultValue='white'
        onChange={handleColorInput}
        size="small"
        sx={{ width: "15ch" }}
      >
        {colors.map((color) => (
          <MenuItem key={color} value={color}>
            {color}
          </MenuItem>
        ))}
      </TextField>
      {quantityAndCost[0] === 0 ? (
        <Typography>Non in Stock!</Typography>
      ) : (
        <Typography>
          Quantità: {quantityAndCost[0]} Prezzo: {quantityAndCost[1]}€
        </Typography>
      )}
    </Stack>
      </CardContent>
    </Card>
  );
};

export default ShoeCard;
