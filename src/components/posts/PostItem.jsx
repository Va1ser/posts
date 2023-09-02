import MyButton from "../UI/button/MyButton";
import style from "./PostItem.module.css"
function PostItem({id , name , body, DeletePost}) {
    function RemovePost(){
        DeletePost(id)
    }
    return ( 
        <div className={style.post}>
            <div className={style.name}>
                {id} Имя:{name}
            </div>
            <div>
                Описание:
                {body}
            </div>
            <MyButton onClick = {RemovePost}>x</MyButton>
        </div>
     );
}

export default PostItem;