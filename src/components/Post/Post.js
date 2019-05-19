import React from 'react';

import './Post.css';

const post = (props) => {
    const { title, body } = props;
    console.log('the value of title and body inside Post', title, body);
    return (
        <article className="Post">
            <h1>{title}</h1>
            <div className="Info">
                <div className="Author">{body}</div>
            </div>
        </article>
    );
};

export default post;