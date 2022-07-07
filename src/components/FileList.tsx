import React, {useState} from 'react'

import store from '../store/store';
import {remove} from '../store/fileSlice';
import {FileInfo} from '../store/fileSlice';

function rm(id: string)
{
    store.dispatch(remove({id}));
}

function createRow(item: FileInfo)
{
    return (
    <tr>
        <td>{item.filename}</td> <td>{item.filetype}</td> <td>{item.size}</td> <td>{item.lastModified}</td>
        <td>
            <button className="action" onClick={() => rm(item.id)} >Delete</button>
        </td>
    </tr>
    );
}

export default function FileList()
{
    const [ver, setVer] = useState<number>(0);
    const state = store.getState();
    const files = state.file;

    store.subscribe(() => {
        setVer(ver + 1);
    });

    // const tr = files.map(item => <tr><td>{item.filename}</td> <td>{item.filetype}</td> <td>{item.size}</td> <td>{item.lastModified}</td></tr>)
    const tr = files.map(item => createRow(item))

    return (
        <div className='mt-3'>
            <table className='table table-bordered border-primary'>

            <thead className='data'>
                <tr>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Size</th>
                    <th>Modified</th>
                    <th>Action</th>
                </tr>
            </thead>

                <tbody>
                {tr}
                </tbody>
            </table>
        </div>
    )
}
