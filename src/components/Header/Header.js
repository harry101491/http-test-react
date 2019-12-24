import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './Header.scss';

class Header extends Component {
    
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                activeClassName="my-home"
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to={{
                                    pathname: '/new_post',
                                    hash: '#submit',
                                    search: '?query_param=true'
                                }}
                            >New Post</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }   
}

export default Header;