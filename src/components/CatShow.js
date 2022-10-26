import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import { catShow, catUpdate, catDelete } from "../api/cat";
import CatUpdate from "./CatUpdate";
import CatDelete from "./CatDelete";


const CatShow = ({ user, msgAlert }) => {

    const [cat, setCat] = useState({})
    const [isUpdateShown, setIsUpdateShown] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)

    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        catShow(user, id)
            .then((res) => {
                setCat(res.data.cat)
            })
            .catch((error) => {
                msgAlert({
                    heading: 'Failure',
                    message: 'Show Cat Failure' + error,
                    variant: 'danger'
                })
            })
    }, [])

    const toggleShowUpdate = () => {
        setIsUpdateShown(prevUpdateShown => !prevUpdateShown)
    }

    // const toggleShowDelete = () => {
    //     setIsDeleted(prevUpdateShown => !prevUpdateShown)
    // }

    const handleChange = (event) => {
        // to keep the values as users input info 
        // first spread the current cat
        // then comma and modify the key to the value you need
        setCat({...cat, [event.target.name]: event.target.value})
    }

    const handleUpdateCat = () => {
        catUpdate(cat, user, id)
        .then(() => {
            msgAlert({
                heading: 'Success',
                message: 'Create Cat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Update Cat Failure' + error,
                variant: 'danger'
            })
        })
    }

    const handleDeleteCat = () => {
        catDelete(cat, user, id)
        .then(() => {
            setIsDeleted(true)
            msgAlert({
                heading: 'Success',
                message: 'Deleting a cat',
                variant: 'success'
            })
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Deleting a cat Failure' + error,
                variant: 'danger'
            })
        })
    }
    // logical &&
    // both sides of this check NEED to be truthy values  = true 
    // logical || 
    // only one side of this check needs to be truthy = true 

    // oneliner
    if(isDeleted) navigate('./cats')

    console.log(cat)
    return (
        <>
            <h3>Name: {cat.name}</h3>
            <p>Type: {cat.type}</p>
            <button onClick={toggleShowUpdate}>Toggle Update</button>
            {isUpdateShown && (
            <CatUpdate cat={cat} handleChange={handleChange} handleUpdateCat={handleUpdateCat}/>
            )}
            <button onClick={handleDeleteCat}>Delete</button>
            {/* {isDeleted && (
            <CatDelete cat={cat} handleDeleteCat={handleDeleteCat} /> */}
            {/* )} */}
        </>
    )
}

export default CatShow