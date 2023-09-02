import style from "./MyButton.module.css"
function MyButton({children , ...props}) {
    return ( 
    <button className={style.btn} {...props}>
            {children}
    </button> );
}

export default MyButton;