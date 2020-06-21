import React from 'react';

const CategoryTile = props =>(
    <li>
        <h1>{props.categoryName}</h1>

        <img src={props.categoryDescription} />
        
        <span>See Projects</span>
    </li>
)

export default CategoryTile