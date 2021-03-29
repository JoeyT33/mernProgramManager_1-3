import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router';
// import { response } from 'express';
// import { response } from 'express';

const OneProduct = (props) => {
    
    const [oneProduct, setoneProduct] = useState({})

    const deleteProduct = (e)=>{
        console.log("Trying to delete this product")
        axios.delete(`http://localhost:8000/api/products/delete/${props.productid}`)
            .then(response=>{
                console.log("Trying to delete")
                console.log(response)
                navigate("/")
            })
            .catch(err=> console.log(err))
        
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${props.productid}`)
            .then(response=> {
                console.log("trying to get one product", response)
                setoneProduct(response.data.results)
            })
            .catch(err=> console.log(err))
    }, [props.productid])

    return (
        <>
        <Link to="/">Go Back</Link> | <Link to = {`/api/products/update/${oneProduct._id}`}>Update Product</Link>
        <div>
            <h1>Hello</h1> 
            <p>Name: {oneProduct.name}</p>
            <p>Price: ${oneProduct.price}</p>
            <p>Description: {oneProduct.description}</p>
            <button className="btn-danger" onClick={deleteProduct}>Delete Product</button>
        </div>
        </>
    );
};


export default OneProduct;