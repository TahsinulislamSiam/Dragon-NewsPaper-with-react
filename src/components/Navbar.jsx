import React, { use } from 'react';
import { Link, Links, NavLink } from 'react-router';
import userIcon from "../assets/user.png"
import { AuthContext } from '../provider/AuthProvider';
import button from 'daisyui/components/button';


const Navbar = () => {
    const {user,logOut}=use(AuthContext);
    const handleLogout=()=>{
        console.log("User trying to logout");
        logOut().then(()=>{
           alert("You logged Out successfully")
        }).catch((error)=>{
           console.log(error)
        });
    };
    return (
        <div className='flex justify-between'>
            <div className="">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink className='p-2 rounded-2xl' to="/">Home</NavLink>
                <NavLink className='p-2 rounded-2xl' to="/about">About</NavLink>
                <NavLink className='p-2 rounded-2xl' to="/career">Career</NavLink>
            </div>
            <div className="login-btn flex gap-5 items-center">
                <img src={userIcon} alt="" />
                { user ? (<button onClick={handleLogout} className='btn btn-primary px-10'>Logout</button>) :  <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link> }
          
            </div>
        </div>
    );
};

export default Navbar;