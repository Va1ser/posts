function Search ({setSearch, value}) {
    return (
    
        <input type="text" placeholder="Поиск" value = {value} onChange={(e) => setSearch (e.target.value)}/>
    )
}
export default Search