import React, {useState, useEffect} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';

const EditProduct = (props) => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        price: "",
        description: ""
    })

    useEffect(()=>{
        axios.get(`http://localhost:8000/api/products/${props.productid}`)
            .then(response=>{
                console.log("trying to edit product")
                setFormInfo(response.data.results)
            })
            .catch(err=>console.log(err))
    }, [props.productid])

    const changeHandler = (e)=>{
        console.log("Editing a product")
        console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/update/${props.productid}`, formInfo)
            .then(response=>{
                console.log("response after editing product")
                console.log(response)
                console.log("response after editing product")


                navigate('/')
            }) 
            .catch(err=>console.log("error making edit", err))
    }
    return (
        <div>
            <p>Editing Product: {props.name}</p>
            <form onSubmit = {submitHandler} className = "col-6 mx-auto">
                <h1>Product Manager</h1>
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler} defaultValue={formInfo.name}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler}  defaultValue={formInfo.price}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler}  defaultValue={formInfo.description}/>
                </div>
                <input type="submit" value="Update" className="btn btn-success"/> 
            </form>
        </div>
    );
};


export default EditProduct;