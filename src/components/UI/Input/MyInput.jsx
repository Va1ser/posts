import style from './MyInput.module.css'
function MyInput(props) {
    return ( 
        <input {...props} className={style.input}/>
     );
}

export default MyInput;