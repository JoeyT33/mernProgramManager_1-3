import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
// import { response } from 'express';

const AllProducts = () => {

    const [allProducts, setAllProducts] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8000/api/products/all")
            .then(response =>{
                console.log('Getting all products')
                console.log(response)
                setAllProducts(response.data.results)
            })
            .catch(err=> console.log("errors retrieving all products", err))
    }, [])

    return (
        <div>
            <h2>All Products</h2>
            {allProducts.map((products, i)=>{
                return <div><Link to = {`/api/products/${products._id}`}>{products.name}</Link></div>
            })}
        </div>
    );
};


export default AllProducts;