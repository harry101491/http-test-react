import React, { Component } from 'react';

import './Header.scss';

class Header extends Component {
    
    render() {
        return (
            <header className="Header">
                <nav>
                    <ul>
                        <li>
                            <a href="/"> Home </a>
                        </li>
                        <li>
                            <a href="/new_post"> New Post </a>
                        </li>
                    </ul>
                </nav>
            </header>
        );
    }   
}

export default Header;