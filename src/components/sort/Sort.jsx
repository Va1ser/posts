import style from './Sort.module.css'
function Sort ({sortValue, changeSortValue, defaultValue, options}){
    return(
        <select className = {style.select} onChange = {(e)=>changeSortValue(e.target.value)}> 
            <option className={style.option}disabled>{defaultValue}</option>
          {options.map((option)=><option className={style.option} value="">{option.name}</option>)}  
        </select>
    )
}
export default Sort