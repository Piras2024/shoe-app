import { Stack, TextField, Typography } from "@mui/material";
import React, { ChangeEvent, useState } from "react";
import Shoe from "../types/Shoe";

const DUMMY_SHOES = [
  new Shoe("Air max", 42, "white", 3),
  new Shoe("Air max", 41, "white", 2),
  new Shoe("Air max", 40, "white", 1),
  new Shoe("Air max", 43, "black", 3),
  new Shoe("Air max", 44, "black", 3),
  new Shoe("Air max", 45, "black", 3),
  // new Shoe('Nike Jordans',40,'black',5),
];

type Props = {};

const ShoeCard = (props: Props) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [size, setSize] = useState<number>();
  const [color, setColor] = useState<string>();
  const handleSizeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setSize(+event.target.value);
    const findShoe = DUMMY_SHOES.find(
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
    const findShoe = DUMMY_SHOES.find(
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
      <Typography>Modello: Air max</Typography>
      <TextField
        id="input-taglia"
        type="number"
        label="Taglia"
        variant="outlined"
        onChange={handleSizeInput}
      />
      <TextField
        id="input-colore"
        label="Colore"
        variant="outlined"
        onChange={handleColorInput}
      />
      <Typography>Quantità: {quantity}</Typography>
    </Stack>
  );
};

export default ShoeCard;
