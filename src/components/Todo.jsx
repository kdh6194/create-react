import React from "react";
import {BsTrash3} from 'react-icons/bs'

export default function Todo({todo, onUpdate, onDelete}) {
    const {id, text, status} = todo;
    const handleChange =(e)=>{
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo,status});
    };
    const handleDelete = () => onDelete(todo);
return<div>
    <li>
        <input type="checkbox" id={id}
         checked={status === 'completed'}
         onChange={handleChange} />
        <label htmlFor={id} >{text}</label>
        <button onClick={handleDelete}><BsTrash3/></button>
    </li>
</div>
}