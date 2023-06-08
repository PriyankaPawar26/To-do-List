import React,{useState} from 'react'

function Todoinput(props) {
   const [InputText , setInputText] = useState('');
   const handleEnterPress =(e)=>{
    if(e.keyCode===13){
        props.addList(InputText)
        setInputText("")
    }
   }

  return (
    
    <div className='input-container'>
    <input type='text' className='input-box-todo' placeholder='enter your to-do' value={InputText} 
    onChange={e=>{
        setInputText(e.target.value)
    }}
    onKeyDown={handleEnterPress}
    />
    <button className='add-btn' onClick={()=>{
        props.addList(InputText)
        setInputText("")
    }}>Add</button>

   
   
    </div>
  )
}

export default Todoinput