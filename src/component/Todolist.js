import React from 'react'

function Todolist(props) {
  return (
    < li className='list-item'>
        <span className='check-icon'>
     <input type='checkbox'/>

    </span>
       {props.item}
    <span className='icons'>
        <i class="fa-solid fa-trash-can icon-delete"
         onClick={e=>{
            props.deleteItem(props.index)
        }}></i>
    </span>
    </li>
  )
}

export default Todolist