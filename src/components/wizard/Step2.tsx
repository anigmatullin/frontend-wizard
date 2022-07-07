import React, {useCallback, useMemo} from 'react'
import {useDropzone} from 'react-dropzone'
import { v4 as uuidv4 } from 'uuid';

import store from '../../store/store';
import {IRootState} from '../../store/store';
import {add} from '../../store/fileSlice';

import FileList from '../FileList';

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column' as 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const focusedStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};



export default function Step2()
{

  const onDrop = useCallback((acceptedFiles: any) => {
    // Do something with the files
    console.log(acceptedFiles);

    for(let i=0; i < acceptedFiles.length; i++) {
      const fileInfo = {
        id: uuidv4(),
        filename: acceptedFiles[i].name,
        filetype: acceptedFiles[i].type,
        size: acceptedFiles[i].size,
        lastModified: acceptedFiles[i].lastModified,
      }

      store.dispatch(add(fileInfo));
    }

  }, []);

  const {
    getRootProps,
    getInputProps,
    isFocused,
    isDragAccept,
    isDragReject,
    isDragActive
  } = useDropzone({onDrop});

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isFocused ? focusedStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
    isFocused,
    isDragAccept,
    isDragReject
  ]);

  return (
    <div className="container">

        <div {...getRootProps({style})}>
        <input {...getInputProps()} />
        {
        isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop some files here, or click to select files</p>
        }

        </div>

        <FileList />

    </div>

  )
}
