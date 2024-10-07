import React, { useEffect, useState } from 'react'
import PostCard from '../../componants/postCard/PostCard'
import Loading from '../../componants/loading/Loading';

export default function Posts() {
  useEffect(()=>{
    fetchPosts()
  } , [])
  
  const [posts , setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchPosts = async ()=>{
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (res.status !== 200) {
          setPosts([]);
      } else {
          const finalRes = await res.json();
          setPosts(finalRes);
          setIsLoading(false);
      }
     } catch (err) {
      console.log(err);
      }
  }

  return (
    <div className='posts-container'>
      {isLoading && <Loading/>}
      { posts?.map((post)=>(
        <PostCard  key={post.id} title={post.title} desc={post.description} id={post.id} />
      ))}
    </div>
  )
}
