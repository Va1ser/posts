import { useState } from "react";
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/button/MyButton";

function CreatePost({AddPost}) {
    const [title, setTitle] = useState('')
    function updateTittle(e){
        setTitle(e.target.value)
    }
    const [body, setBody] = useState('')
    function updateBody(e){
        setBody(e.target.value)
    }
    function CreatePost(){
        AddPost(title, body)
        setTitle('')
        setBody('')
    }
    
    return ( 
        <div style={{width:'50%', margin:'0 auto'}}>
           <MyInput placeholder = 'Введите название' value = {title} onChange = {updateTittle}/>
           <MyInput placeholder = 'Введите текст' value = {body} onChange = {updateBody} />
           
           
            <MyButton onClick = {CreatePost}>Создать пост</MyButton>
        </div>
     );
}

export default CreatePost;