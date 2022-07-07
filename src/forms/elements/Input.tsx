import React, {createRef, forwardRef} from 'react'
import { ChangeHandler } from 'react-hook-form'
import { TextField } from '@mui/material'

type Props = {
    label: string,
    name: string,
    onChange: (value: any) => void,
    onBlur: () => void,
}

const Input = forwardRef((props: Props, ref) => {

    return (
        <div>
            <TextField
                variant='outlined'
                margin='normal'
                fullWidth={true}
                label={props.label}
                inputRef={ref}
            />
        </div>
    )

})

export default Input;
