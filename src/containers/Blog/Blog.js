import React, { Component } from 'react';

import { Route, Switch} from 'react-router-dom';

import Header from '../../components/Header/Header';
import Posts from './Posts/Posts';
import NewPost from '../../containers/Blog/NewPost/NewPost';
import FullPost from '../../containers/Blog/FullPost/FullPost';

import './Blog.scss';


class Blog extends Component {

    render () {
        return (
            <div>
                <Header />
                <Switch>
                    <Route 
                        path='/'
                        exact
                        component={Posts}
                    />
                    <Route 
                        path='/new_post'
                        component={NewPost}
                    />
                    <Route 
                        path='/:id'
                        component={FullPost}
                    />
                </Switch>
            </div>
        );
    }
}

export default Blog;