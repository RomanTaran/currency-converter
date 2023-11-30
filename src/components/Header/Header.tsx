import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Container} from "@mui/material";
import {useDollarEuro} from "../../hooks";

const Header = () => {
  const {dollar, euro} = useDollarEuro();

  return (
    <Box sx={{flexGrow: 1}}>
      <Container>
        <Toolbar sx={{justifyContent: 'center'}}>
          <Typography variant="h6" component="div" mr={8}>
            Курс валют НБУ:
          </Typography>
          <Typography variant="body1" component="div" mr={2}>
            USD
          </Typography>
          <Typography variant="body1" component="div" mr={8}>
            {dollar}
          </Typography>
          <Typography variant="body1" component="div" mr={2}>
            EUR
          </Typography>
          <Typography variant="body1" component="div">
            {euro}
          </Typography>
        </Toolbar>
      </Container>
    </Box>
  );
}

export default Header;
