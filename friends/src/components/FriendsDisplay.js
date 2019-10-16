import React from 'react'
import axiosWithAuth from '../utils/axiosWithAuth';


const FriendsDisplay = ({friend, setFriends}) => {

    const deleted=(id)=> {
        axiosWithAuth()
        .delete(`/friends/${id}`)
        .then(res => setFriends(res.data))
        .catch(err => console.log(err))
    }


    return ( 
        <div className="friendsInfo">
            <h1>{friend.name}</h1>
            <h4>{friend.email}</h4>
            <h4>{friend.age}</h4>
            <button onClick={()=> deleted(friend.id)}>Delete Friend</button>
            {/* <h4>{friend.id}</h4> */}
        </div>
     );
}
 
export default FriendsDisplay;