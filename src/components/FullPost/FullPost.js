import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null,
        deleted: false,
    };
    
    componentDidUpdate() {
        console.log('inside update and id is present', this.props);
        if(this.props.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id)) {
                axios
                    .get('posts/'+this.props.id)
                    .then((res) => {
                        this.setState({
                            loadedPost: res.data,
                            deleted: false,
                        });
                    })
                    .catch(() => {
                        console.log('data not fetched');
                    });
             
            }           
        }
    }

    deletePostHandler = () => {
        axios
            .delete('posts/'+this.props.id)
            .then((res) => {
                console.log('delete request sucess', res);
                this.setState({
                    deleted: true
                })
            })
            .catch((err) => {
                console.log('error has occured while deleting', err);
            });
    }
    
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if(this.props.id && !this.state.deleted) {
            post = <p style={{ textAlign: 'center' }}>Loading Data...</p>;
        }
        if(this.state.loadedPost && !this.state.deleted) {
            console.log('when the post.id is true');
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button 
                            className="Delete"
                            onClick={this.deletePostHandler}
                        >Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;