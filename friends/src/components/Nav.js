import React from 'react'
import {Link } from 'react-router-dom';

const Nav = () => {
    return (  
        <div>
            <h2>Auth-Friends</h2>
             <nav>
                 <Link to='/login' className="login">Login</Link>
                 <Link to='/protected' className="login">Friends</Link>
             </nav>
        </div>
    );
}
 
export default Nav;