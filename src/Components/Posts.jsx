import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { APIs } from '../const/APIs'

const Posts = () => {
   
  const [posts, setPosts] = useState([])
  
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        //     .then(res => setPosts(res.json))
        axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCTS)
            .then(res => {
                console.log(res);
                setPosts(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])
  return (
    <>
        <h1 className='text-bold'>All Featured Products</h1>
        <div className='container row'>
            {
                posts.map(post => {
                    return <div className='col-sm-12 pt-4 pb-4 col-md-6 col-lg-3' style={{maxWidth: "20%"}}>
                          <div className="card">
                            <img src={post.image} alt="" className="card-img-top" />
                            <div className="card-body">
                                <h5 className='card-title'>{post.title}</h5>
                                <h6 className="card-text">${post.price}</h6>
                                <button className="primary card-btn">View Product</button>
                            </div>
                        </div>  
                    </div>
                })
            }
        </div>
        
        {/* <ul>
            {
                posts.map(post => <li key={post.id}>{post.title} <img src={post.image} alt="" /> {post.price}</li> )
            }
        </ul> */}
    </>
  )
}

export default Posts