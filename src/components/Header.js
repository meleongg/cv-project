import React, { Component } from 'react';
import "../styles/Header.css";

class Header extends Component {
    render() {
        return (
            <header id="header">
                <nav>
                    <h1 id="title">Resume Generator</h1>
                </nav>
            </header>
        );
    }
}

export default Header;