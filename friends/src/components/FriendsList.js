import React,{useState, useEffect} from 'react';
import axiosWithAuth from  '../utils/axiosWithAuth';

const FriendsList = () => {
    const [friends, setFriends]=useState([ ]);

    useEffect(()=> {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
    },[])

    if(friends.length === 0){
        return (
            <h1>Loading...</h1>
        )
    }
    

    return ( 
        <div>
            <h1>Friends</h1>
            <div>
                {friends.map(friend=> {
                    return (
                        <div>
                            <h3>{friend.name}</h3>
                            <h3>{friend.email}</h3>
                            <h3>{friend.age}</h3>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default FriendsList;