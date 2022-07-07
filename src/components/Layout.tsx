import React from 'react'
import {NavLink, Outlet} from 'react-router-dom'
import { Container } from '@mui/material';

import AppMenu from './AppMenu';

export default function Layout()
{
  return (
    <div>

    <AppMenu />

        <Outlet></Outlet>

    {/* <div className="container">
    <Outlet></Outlet>
    </div> */}

    </div>
  )
}
