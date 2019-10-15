import React,{useState} from 'react'
import axios from 'axios'
import  axiosWithAuth  from '../utils/axiosWithAuth'


const Login = (props) => {

const [credentials, setCredentials] = useState({
    username: '',
    password: '', 
})

const handleChanges = e => {
    setCredentials({
        ...credentials,
        [e.target.name]: e.target.value
    })
}

const submit = e => {
    e.preventDefault();

    axiosWithAuth()
    .post('/login', credentials)
    .then(res => {
        console.log(res.data)
        localStorage.setItem('token', res.data.payload);
        //push user to a protected page
        props.history.push('/protected')
    })
    .catch(err => console.log(err.res))
}


    return ( 
        <form onSubmit={submit}>
            <input 
            type='text'
            name='username'
            placeholder='username'  
            value={credentials.username}
            onChange={handleChanges}
            />
            <input 
            type='password'
            name='password'
            placeholder='password'  
            value={credentials.password}
            onChange={handleChanges}
            />
            <button type='submit'>Login</button>
        </form>
     );
}
 
export default Login;