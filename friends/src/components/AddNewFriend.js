import React,{useState} from 'react';
import axiosWithAuth from '../utils/axiosWithAuth'

const AddNewFriend = ({createNew}) => {
    const[newFriend,setNewFriend] =useState({
        name:'',
        email: '',
        age: '',
    })

  
    function onSubmit (e) {
        e.preventDefault();
        
	 	const list = {
			 ...newFriend,
		 }
        axiosWithAuth()
          .post("/friends", list)
		  .then(res => {
			 createNew(res.data)
        })
        .catch(err => console.log(err.res))
        
        setNewFriend({
            name:'',
            email: '',
            age:' '

        })
    }

    
    
    const handleChange = e => {
        setNewFriend({
            ...newFriend,
            [e.target.name]: e.target.value
        })
    }

    
    return (  
        <form onSubmit={onSubmit}>
			<input 
				type="text"
				name="name"
				placeholder="name"
				value={newFriend.name}
				onChange={handleChange}
			/>
			<input 
				type="email"
				name="email"
				placeholder="email"
				value={newFriend.email}
				onChange={handleChange}
			/>
			<input 
				type="text"
				name="age"
				placeholder="Age"
				value={newFriend.age}
				onChange={handleChange}
			/>
			<button type="submit">Add Friend</button>
		</form>
    );
}
 
export default AddNewFriend;