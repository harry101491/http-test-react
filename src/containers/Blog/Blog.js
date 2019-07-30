import React, { Component } from 'react';

import Header from '../../components/Header/Header';
import Posts from './Posts/Posts';

import './Blog.scss';

class Blog extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <Posts />
            </div>
        );
    }
}

export default Blog;