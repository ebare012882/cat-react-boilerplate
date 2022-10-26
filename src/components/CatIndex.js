import React, { useEffect, useState } from 'react' 
import { Link } from 'react-router-dom'
import { catIndex } from '../api/cat'

const CatIndex = ({ user, msgAlert }) => {

    const [allCats, setAllCats] = useState([])

    useEffect(() => {
        catIndex(user)
        .then(res => {
            setAllCats(res.data.cats)
        })
        .catch((error) => {
            msgAlert({
                heading: 'Failure',
                message: 'Index Cats Failure' + error,
                variant: 'danger'
            })
        })
    }, [])

    const allCatsJSX = allCats.map(cat => {
        return (
            <Link to={cat._id} key={cat._id}>
            <li>Name: {cat.name} type: {cat.type} color: {cat.color} age: {cat.age}</li>
            </Link>
        )
    })

    return (
        <>
            <ul>{allCatsJSX}</ul>
        </>
    )
}

export default CatIndex