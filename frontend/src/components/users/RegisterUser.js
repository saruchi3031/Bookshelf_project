import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import {useNavigate} from 'react-router-dom';
import { registerUserAction } from '../../redux/actions/users/usersActions';
//const navigate= useNavigate();
const RegisterUser = ({ navigate }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const dispatch = useDispatch();
  
    //Grab user login from store
    const userLogin = useSelector(state => state.userLogin);
  
    const { userInfo } = userLogin;
    //Redirect if user is login/authenticated
  
    useEffect(() => {
      if (userInfo) {
        navigate('/dashboard');
      }
    }, [navigate, userInfo]);
  
    const formSubmitHandler = e => {
      e.preventDefault();
      //disptach action here
      dispatch(registerUserAction(name, email, password));
    };
  return (
    <div className='row container-height'>
      <div className='col-lg-6 col-md-6 m-auto'>
        <div className='container'>
          <h1 className='text-center'>Register</h1>

          <form onSubmit={formSubmitHandler}>
            <fieldset>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Name</label>
                <input
                    value={name}
                  onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter Name'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                value={email}
                  onChange={e => setEmail(e.target.value)}
                  type='email'
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                  placeholder='Enter email'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                value={password}
                  onChange={e => setPassword(e.target.value)}
                  type='password'
                  className='form-control'
                  id='exampleInputPassword1'
                  placeholder='Password'
                />
              </div>
              <button type='submit' className='btn btn-info m-auto'>
                Register
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;