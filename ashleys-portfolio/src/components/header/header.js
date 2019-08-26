import React from 'react';

const Header = props => {
    return (
        <div className="menu-wrap">
            <input type="checkbox" class="toggler"></input>
            <div className="hamburger"><div></div></div>
            <div className = "menu">
                <div>
                    <div>
                        <ul>
                            <li><a href="ashleybreunich.com">Home</a></li>
                            <li><a href="ashleybreunich.com">About</a></li>
                            <li><a href="ashleybreunich.com">Projects</a></li>
                            <li><a href="ashleybreunich.com">Get in Touch</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Header;