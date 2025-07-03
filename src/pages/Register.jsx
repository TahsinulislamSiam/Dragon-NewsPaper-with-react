import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
       <div className='flex justify-center min-h-screen items-center'>
           <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
            <h2 className='font-semibold text-2xl text-center'>Register your Account</h2>
      <div className="card-body">
        <fieldset className="fieldset">
            <label className="label">Name</label>
          <input type="text" className="input" placeholder="Your name" />
          
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          <label className="label">Photo url</label>
          <input type="text" className="input" placeholder="Url" />
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          
         
          <button className="btn btn-neutral mt-4">Register</button>
           <p className='font-semibold text-center pt-5'>Already Have An Account? <Link to="/auth/login" className='text-secondary'>Login Now</Link></p>
        </fieldset>
      </div>
    </div> 
        </div>
    );
};

export default Register;