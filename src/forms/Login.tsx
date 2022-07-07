import React from 'react'
import { useForm } from 'react-hook-form'

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


type FormData = {
    user: string,
    pass: string,
}


export default function Login()
{
    const form = useForm<FormData>();

    const {register} = form;

    return (
    <div>
        <header>Demo App</header>
        <form>

            <div style={{margin: 3, padding: 3}}>
            <TextField size='small' {...register('user')} ></TextField>
            </div>

            <div style={{margin: 3}}>
            <TextField size='small' {...register('pass')} ></TextField>
            </div>

            <div style={{margin: 3}}>
            <Button variant="contained">Login</Button>
            </div>

        </form>

    </div>
    )
}

