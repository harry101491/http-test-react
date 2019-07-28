import React, { Component } from 'react';

import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import Header from '../../components/Header/Header';

import './Blog.scss';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };
    
    componentDidMount() {
        axios
          .get('posts/')
          .then(posts => {
            const newPosts = posts.data.slice(0, 4);
            const updatedPosts = newPosts.map((post) => {
                return {
                    ...post,
                    author: 'Harshit',
                };
            });

            this.setState({
              ...this.state,
              posts: updatedPosts,
            });

          })
          .catch(() => {
              this.setState({
                  error: true
              });
          });
    }

    postClickedHandler = (id) => {
        this.setState({
            ...this.state,
            selectedPostId: id,
        });
    }
    
    render () {
        let posts = <p style={{ textAlign: 'center' }}> Something went wrong! </p>;

        if(!this.state.error) {
            posts = this.state.posts
                .map(post => 
                    <Post 
                        key={post.id} 
                        {...post} 
                        clicked={() => this.postClickedHandler(post.id)}
                    />
                )
        }
        return (
            <div>
                <Header />
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost 
                        id={this.state.selectedPostId}
                    />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;