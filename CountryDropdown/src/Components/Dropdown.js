import React from 'react'


// Functional component - takes two parameters , one is a list for either list of countries or list of regions 
// The second parameter is an onChange function that will handle the API - fetch 
const DropdownComp = ({ list, onChange, label }) => {
    return <>
        <label>{label} </label>
        <select onChange={(e) => onChange(e.target.value)} class="form-select mt-2 mb-2" aria-label="Default select example">
            {
                // Here I use the map function to render a new array of JSX 
                list.map((x, i) => <option value={x} key={i}>{x}</option>)
            }
        </select>
    </>
}


export default DropdownComp;



