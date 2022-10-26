import React from 'react'

const CatUpdate = ({ cat, handleChange, handleUpdateCat }) => {
	return (
		<>
			<input 
            type='text' 
            value={cat.name} 
            name='name' 
            onChange={handleChange} 
            />
			<input 
            type='text' 
            value={cat.type} 
            name='type' 
            onChange={handleChange} 
            />
            <input 
            type='text' 
            value={cat.color} 
            name='color' 
            onChange={handleChange} 
            />
            <input 
            type='Number' 
            value={cat.age} 
            name='age' 
            onChange={handleChange} 
            />
			<button onClick={handleUpdateCat}>Update Cat</button>
		</>
	)
}

export default CatUpdate