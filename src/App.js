import logo from './logo.svg';
import React from 'react'
import './App.css';
import Todoinput from './component/todoinput';
import Todolist from './component/Todolist';
import Close from './component/Close1';

import { useState } from 'react';
function App() {

  const [listTodo, setListTodo]= useState([]);
  let addList =(inputText)=>{
    if(inputText !=='')
        setListTodo([...listTodo,inputText]);
  }

  const deleteListItem =(key)=>{
    let newListToDo =[...listTodo];
    newListToDo.splice(key,1)
    setListTodo([...newListToDo])
  }

  
  
  return (
   <div className='main-container'>
    <div className='center-container'> 
    <h1 className='app-heading'> To-Do List</h1>
    
    < Todoinput addList={addList} />
   
    <hr />
    {listTodo.map((listItem,i)=>{
      return(
         <Todolist key={i} index={i} item={listItem} deleteItem ={deleteListItem} />
      )
    })}
  
  <Close />

    
    </div>
   </div>
  );
}

export default App;
