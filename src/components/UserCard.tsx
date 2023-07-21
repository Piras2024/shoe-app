import { Avatar, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'
import User from '../modules/User'
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";

type Props = {
    user : User
}

const UserCard = (props: Props) => {
    const handleRemoveUser = () => {
        console.log('remove '+props.user.codFiscale)
    }
  return (
    <ListItem
            alignItems="flex-start"
            secondaryAction={
              <IconButton onClick={handleRemoveUser} edge="end" aria-label="delete">
                <PersonRemoveIcon />
              </IconButton>
            }
          >
            <ListItemAvatar>
              <Avatar alt={props.user.nome} src="a" />
            </ListItemAvatar>
            <ListItemText
              primary={props.user.nome + " " + props.user.cognome}
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {props.user.ruolo}
                  </Typography>
                </React.Fragment>
              }
            />
          </ListItem>
  )
}

export default UserCard