import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li>
                            <Link
                                to='/'
                            >Home</Link>
                        </li>
                        <li>
                            <Link
                                to={{
                                    pathname: '/new_post',
                                    hash: '#submit',
                                    search: '?query_param=true'
                                }}
                            >New Post</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }   
}

export default Header;