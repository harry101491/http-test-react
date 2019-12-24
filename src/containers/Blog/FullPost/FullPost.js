import React, { Component } from 'react';
import API from '../../../api';

import './FullPost.scss';

class FullPost extends Component {

    state = {
        loadedPost: null,
        deleted: false,
    };

    componentDidMount() {
        console.log('The value of full post props is: ', this.props);
        if(this.props.match.params.id) {
            if(!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.match.params.id)) {
                API
                    .get('posts/'+this.props.match.params.id)
                    .then((res) => {
                        console.log('after getting the data', res);
                        this.setState({
                            loadedPost: res.data,
                            deleted: false,
                        });
                    });
            }           
        }
    }
    
    deletePostHandler = () => {
        API
            .delete('posts/'+this.props.id)
            .then((res) => {
                this.setState({
                    deleted: true
                })
            });
    }
    
    render () {
        let post = <p style={{ textAlign: 'center' }}>Please select a Post!</p>;
        if(this.props.id && !this.state.deleted) {
            post = <p style={{ textAlign: 'center' }}>Loading Data...</p>;
        }
        if(this.state.loadedPost && !this.state.deleted) {
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
