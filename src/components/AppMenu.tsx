import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';

import { NavLink } from 'react-router-dom';

const boxStyles = {
    display: 'flex',
    gap: 2,
    flexWrap: 'wrap',
    background: 'black',
    padding: 1,
}


export default function AppMenu()
{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

  return (

    <Box sx={boxStyles}  className='menu'>

      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Home
      </Button>


      <Button
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded='true'
        // onClick={handleClick}
      >
        <NavLink to="/wizard/step1">Step1</NavLink>
      </Button>


      <Button
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded='true'
        // onClick={handleClick}
      >
        <NavLink to="/wizard/step2">Step2</NavLink>
      </Button>


      <Button
        aria-controls='basic-menu'
        aria-haspopup='true'
        aria-expanded='true'
        // onClick={handleClick}
      >
        <NavLink to="/wizard/step3">Step3</NavLink>
      </Button>


      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>

      </Box>
  );
}
