import React from 'react'
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { TextField, Container } from '@mui/material'
import {useSelector} from 'react-redux'


import nstore from '../../store/store';
import {IRootState} from '../../store/store';
import {set} from '../../store/nameSlice';

type FormData = {
    firstname: string,
    lastname: string,
    position: string,
}

export default function Step1()
{
    const nav = useNavigate();

    const data: FormData = useSelector((state: IRootState) => state.name);

    const {register, handleSubmit, formState, setValue, getValues} = useForm<FormData>({
        mode: 'onChange',
        defaultValues: data,
    });

    console.log(formState);

    nstore.subscribe(() => {
        const state = nstore.getState();
        const curr = getValues();
        const newdata = state.name;

        if (curr !== newdata) {   //make deep compare of object values!
            setValue("firstname", newdata.firstname);
            setValue("lastname", newdata.lastname);
            setValue("position", newdata.position);
        }

    });

    function onSubmit(data: FormData)
    {
        nstore.dispatch(set(data));
        nav(`/wizard/step2`);
    }


    return (
        <Container maxWidth="xs">

        <form onSubmit={handleSubmit(onSubmit)}>

            <TextField
                variant='outlined'
                margin='normal'
                fullWidth={true}
                label="First Name"
                {...register('firstname')}
            />

            <TextField
                variant='outlined'
                margin='normal'
                fullWidth={true}
                label="Last Name"
                {...register('lastname')}
            />

            <TextField
                variant='outlined'
                margin='normal'
                fullWidth={true}
                label="Position"
                {...register('position')}
            />

            <input type="submit" value="OK" />

            </form>

        </Container>

  )
}
