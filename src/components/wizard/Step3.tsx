import React from 'react';

import store from '../../store/store';
import {IRootState} from '../../store/store';

import { Link } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import FileList from '../FileList';


export default function Step3()
{
  const finnish = `https://www.youtube.com/watch?v=KzCeNjRd2Bk`;

  const state = store.getState();
  const info = state.name;

  

  // function handleInc()
  // {
  //   store.dispatch(increment(null));
  // }

  // function handleDec()
  // {
  //   store.dispatch(decrement(null));
  // }

  return (
    <div className='container'>

      <ul>
        <li>{info.firstname}</li>
        <li>{info.lastname}</li>
        <li>{info.position}</li>
      </ul>

      <FileList />


    <Stack spacing={2} direction="row">
      <Button variant="contained" component={Link} to="/wizard/step1">Start Over</Button>
      <Button variant="contained" target="_blank" href={finnish}>Finnish</Button>
      {/* <Button variant="contained">Finish</Button> */}
    </Stack>
    </div>
  )
}
