import React from 'react';
import { Link } from 'react-router-dom';

let SideMenuBar = (props) => {
    return (
        <ul className="nav justify-content-center bg-info m-2 pt-2 pb-2 rounded">
            <li className="nav-item w-75 p-1">
                <Link to='/add' className='nav-link btn btn-primary'>Add News</Link>
            </li>
            <li className="nav-item w-75 p-1">
                <Link to='/authors' className='nav-link btn btn-primary'>Add/Edit Authors</Link>
            </li>
            <li className="nav-item w-75 p-1">
                <Link to='/tags' className='nav-link btn btn-primary'>Add/Edit Tags</Link>
            </li>
        </ul>
    )
}

export default SideMenuBar;