import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function SinglePost() {
    const {id} = useParams();
    const [singlePost,setSinglePost] =useState({})
    const [counter,setCounter] =useState(0)
    const fetchSinglePostAPI =async () => {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const finalRes = await res.json()
        setSinglePost(finalRes)        
    }
    useEffect(() => {
            fetchSinglePostAPI()
    },[])

  return (
    <div className='container'>
    <div className="singlePost">
        <div className="singlePost-image">
            <img src={singlePost.image} alt="" />
        </div>
        <div className="singlePost-content">
         <h2>{singlePost.title}</h2>
         <p>{singlePost.description}</p>
         <span>Price: {singlePost.price} $ </span>
        <div className='singlePost-counter'>
            <span>{counter}</span>
            <button onClick={()=>{
                setCounter(counter+1)
            }}>Add To Cart</button>
        </div>
        </div>
    </div>
 </div>
  )
}
