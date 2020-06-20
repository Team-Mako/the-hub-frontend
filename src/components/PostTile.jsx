import React from 'react';

const PostTile = props =>(
    <li>
        <img src={props.url} />
        <h1>{props.title}</h1>

        <img src={props.authorAvator} />
        {/* likes and views */}
    </li>
)

export default PostTile