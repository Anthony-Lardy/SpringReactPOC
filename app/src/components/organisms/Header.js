import * as React from 'react';


import { Typography, Toolbar, Box, AppBar} from '@mui/material';

const Header = (props) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Header
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}; export default Header