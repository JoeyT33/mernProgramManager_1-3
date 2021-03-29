import React, {useState} from 'react';
import {navigate} from '@reach/router'
import axios from 'axios';


const CreateProduct = () => {
    const [formInfo, setFormInfo] = useState({
        name: "",
        price: "",
        description: ""
    })


    const changeHandler = (e)=>{
        console.log("Creating new product")
        console.log(e.target)
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const submitHandler = (e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/api/products/create", formInfo)
            .then(response=>{
                console.log("response after submitting the post request", response)
                navigate('/')
            })
            .catch(err=>console.log(err))
    }

    return (
        <div>
            <form onSubmit = {submitHandler} className = "col-6 mx-auto">
                <h1>Product Manager</h1>
                <div className="form-group">
                    <label htmlFor="">Name: </label>
                    <input type="text" name="name" id="" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Price: </label>
                    <input type="number" name="price" id="" className="form-control" onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Description: </label>
                    <input type="text" name="description" id="" className="form-control" onChange={changeHandler}/>
                </div>
                <input type="submit" value="Create" className="btn btn-success"/> 
            </form>
        </div>
    );
};


export default CreateProduct;