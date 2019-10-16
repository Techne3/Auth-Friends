import React,{useState, useEffect} from 'react';
import axiosWithAuth from  '../utils/axiosWithAuth';
import FriendsDisplay from './FriendsDisplay';
import AddNewFriend from './AddNewFriend'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import Loader from 'react-loader-spinner'

const FriendsList = () => {
    const [friends, setFriends]=useState([ ]);

    useEffect(()=> {
        axiosWithAuth()
        .get('/friends')
        .then(res => setFriends(res.data))
    },[])

    if(friends.length === 0){
        return(
        <div className="loading">
            <Loader 
            type="Circles"
            color="#40968e"
            height={200} width={150} />
        </div>
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
                        <FriendsDisplay key={friend.id} friend={friend} setFriends={setFriends}/>
                    )
                })
                }
            </div>
        </div>
     )
}
 
export default FriendsList;


