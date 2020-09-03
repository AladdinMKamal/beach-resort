import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { FaAlignRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    state = {
        isOpen: false
    };

    handleToggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    handleToggleLinks = () => {
        if (this.state.isOpen)
            this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <>
                <div className={this.state.isOpen ? "main-overlay" : ""} onClick={this.handleToggle}></div>
                <nav className="navbar">
                    <div className="nav-center">
                        <div className="nav-header">
                            <Link to="/"><img src={logo} alt="Beach Resport" /></Link>
                            <button type="button" className="nav-btn" onClick={this.handleToggle}>
                                <FaAlignRight className="nav-icon" />
                            </button>
                        </div>
                        <ul className={this.state.isOpen ? "nav-links show-nav" : "nav-links"}>
                            <li><Link to="/" onClick={this.handleToggleLinks}>Home</Link></li>
                            <li><Link to="/rooms" onClick={this.handleToggleLinks}>Rooms</Link></li>

                        </ul>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar;