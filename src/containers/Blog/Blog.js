import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
    };
    
    componentDidMount() {
        axios.get('http://jsonplaceholder.typicode.com/posts').then(posts => {
            this.setState({
                ...this.state,
                posts: posts.data
            });

            console.log('The data is: ', this.state.posts);
        });
    }
    
    render () {
        return (
            <div>
                <section className="Posts">
                    {this.state.posts.map(post => <Post {...post}/>)}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;