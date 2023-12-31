import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect } from 'react'
import axios from 'axios'
import { APIs } from '../const/APIs'


const Products = () => {
   
  const [products, setProducts] = useState([])
  
    useEffect(()=>{
        // fetch('https://fakestoreapi.com/products')
        //     .then(res=>res.json())
        //     .then(json=>console.log(json))
        //     .then(res => setPosts(res.json))
        axios.get(APIs.ECOMMERCE.PRODUCTS.GET_ALL_PRODUCTS)
            .then(res => {
                console.log(res);
                setProducts(res.data);
            }).catch(error => {
                console.log(error);
            })
    }, [])
  return (
    <>
        <h1 className='text-bold'>All Featured Products</h1>
        <Container fluid>
        <Row>
                {
                    products.map((product) => {
                        return <Card className='my-3' style={{width: '18rem', marginLeft: '0.8rem'}}>
                            <Card.Img variant="top" className='' src={product.image} />
                            <Card.Body>
                                <Card.Title>{product.title}</Card.Title>
                                <Card.Text>
                                    {product.description}    
                                </Card.Text>
                                <Button variant='danger'>Visit Product</Button>
                            </Card.Body>
                        </Card>
                    })
                }
        </Row>
        </Container>
    </>
  )
}

export default Products