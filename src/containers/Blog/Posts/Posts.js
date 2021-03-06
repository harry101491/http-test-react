import React, { Component } from 'react';
import API from '../../../api';
import { Link } from 'react-router-dom';

import Post from '../../../components/Post/Post';

import './Posts.scss';

class Posts extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    };
    
    componentDidMount() {
        API
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
    
    render() {
        let posts = <p style={{ textAlign: 'center' }}> Something went wrong! </p>;

        if(!this.state.error) {
            posts = this.state.posts
                .map(post => 
                    <Link to={'/' + post.id} key={post.id}>
                        <Post 
                            {...post}
                            clicked={() => this.postClickedHandler(post.id)}
                        />
                    </Link>
                )
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;
