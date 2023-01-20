
import { useEffect, useState } from 'react';
import Pagination from './component/Pagination';
import './App.css';

function App() {
  const [posts,setPosts] = useState([])
  const [currPage,setCurrPage] = useState(1)
  const [postPerPage] = useState(10)

  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => setPosts(json))
   
  
  },[])

 const indexOfLastPost = currPage * postPerPage;
 const indexOfFirstPost =  indexOfLastPost - postPerPage; 
const currentPosts = posts.slice(indexOfFirstPost,indexOfLastPost) 
 

 
  const paginate = pn =>{
    setCurrPage(pn);
  }

  return (
    

      <>
    <div className="App">
      <h1 style={{textDecoration:'underline'}}>Pagination</h1>
      <div style={{width:'20rem',margin:'2px auto'}}>
      {currentPosts.map((post)=>{
        return <h1 style={{border:'2px solid green',backgroundColor:'lightpink',color:'white' ,fontSize:'1.5rem'}} key={post.id}>{post.id} {post.title}</h1>
      })}
      </div>
    <Pagination pageperpost={postPerPage} totalpost={posts.length} paginate={paginate} />
    </div>
    </>

);
}

export default App;
