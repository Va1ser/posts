import { useEffect, useState } from 'react';
import './App.css';
import PostList from './components/posts/PostList';
import CreatePost from './components/posts/CreatePost';
import Loader from './components/UI/loader/Loader';
import Sort from './components/sort/Sort';
import Search from './components/search/Search';

const options = [
  {
    name:'По названию', value:'title'
  },
  {
    name:'По описанию', value:'body'
  }
]
function App() {
  const [posts, setPosts] = useState(
    [
      {id:1 , name:'name1' , body:'описание поста'},
      {id:2 , name:'name2' , body:'описание поста'},
      {id:3 , name:'name3' , body:'описание поста'},
    ]
  )
  const [search, setSearch] = useState('')
  const [isLoad, setIsload] = useState(true) 
  const [sortValue, setSortValue] = useState('')

  function AddPost(title, body){
    setPosts([...posts, {name:title, body:body, id:Date.now()}])
  }

  function DeletePost(id){
      setPosts(posts.filter(post => id != post.id))
  }

  function LoadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then(response => response.json())
      .then(json => {
        setPosts(json)
        setIsload(false)
      })
  }

  function getVisiblePosts (){
    return posts.filter((post) => post.title.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

  }


  function changeSortValue (value){
    console.log("Пытаюсь изменить состояние сортировки!");
    console.log(value);
    setSortValue(value)
  }

  useEffect(()=> {
    LoadPosts()
  }, [])
  return (
    
    <div className="App">
      <CreatePost AddPost = {AddPost}  />
      <Sort defaultValue='сортировка' options={options} sortValue={sortValue} changeSortValue={setSortValue}/> 
      <Search setSearch = {setSearch} value = {search}/>
      {isLoad ==true? <Loader/>:<PostList posts = {getVisiblePosts()} DeletePost = {DeletePost} />}
      
      

    </div>
  );
}

export default App;
