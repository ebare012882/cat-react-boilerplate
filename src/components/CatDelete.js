import React from 'react'
import { useParams } from 'react-router-dom'
import CatUpdate from "./CatUpdate";


const CatDelete = ({ handleDeleteCat }) => {
    return (
        <>
            <button onClick={handleDeleteCat}>Delete Cat</button>
        </>
    )
}

export default CatDelete 