import React, { Component } from 'react';

import { Route } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';

import './Blog.scss';


class Blog extends Component {
    
    render () {
        return (
            <div>
                <Header />
                <Route 
                    path='/'
                    exact
                    component={Posts}
                />
                <Route 
                    path='/new_post'
                    component={NewPost}
                />
            </div>
        );
    }
}

export default Blog;