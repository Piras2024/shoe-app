import { DUMMY_USERS } from "../mockData/mockUsers";
import {
  Box,
  Button,
  Divider,
  List,
} from "@mui/material";

import PersonAddAlt1Icon from '@mui/icons-material/PersonAddAlt1';
import UserCard from "../components/UserCard";

type Props = {};

const Workers = (props: Props) => {
  const users = DUMMY_USERS;
  const handleAddUser = () => {
    console.log('add')
  }
  return (
  <>
    <List>
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"}>
        <Button onClick={handleAddUser} variant='text' endIcon={<PersonAddAlt1Icon />} sx={{color:'GrayText'}}>
    Aggiungi Utente
        </Button>
      </Box>

<Divider />
       
      {users.map((user) => (
        <Box key={user.codFiscale}>
          <UserCard user={user}/>
          <Divider />
        </Box>
      ))}
      </List>
  </>
  );
};

export default Workers;
