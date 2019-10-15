import React,{useState, useEffect} from 'react';
import axiosWithAuth from  '../utils/axiosWithAuth';
import FriendsDisplay from './FriendsDisplay';
import AddNewFriend from './AddNewFriend'

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
    
        const createNew=(added)=>{
            setFriends(added)
        }
  

    return ( 
        <div>
            <h1>Friends</h1>
            <AddNewFriend createNew={createNew} />
            <div className="friendsWrap">
                {friends.map(friend=> {
                    return(
                        <FriendsDisplay key={friend.id} friend={friend} />
                    )
                })
                }
            </div>
        </div>
     )
}
 
export default FriendsList;


