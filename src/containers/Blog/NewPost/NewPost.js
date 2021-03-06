import React, { Component } from 'react';
import API from '../../../api';

import './NewPost.scss';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max'
    }

    componentDidMount() {
        console.log('params in New post', this.props.location.search);
        // getting the hash value and serach params
        const query = new URLSearchParams(this.props.location.search);
        console.log('the value query_param' + query.get('query_param'));
    }

    postDataHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author,
        };

        API
            .post('posts/', data)
            .then(res => {
                console.log('the succesfull response', res);
            })
            .catch(() => {
                console.log('response is not coming');
            });
    }

    render () {
        return (
            <div className="NewPost">
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button
                    onClick={this.postDataHandler}
                >Add Post</button>
            </div>
        );
    }
}

export default NewPost;
