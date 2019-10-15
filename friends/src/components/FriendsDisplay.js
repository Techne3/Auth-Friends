import React from 'react'


const FriendsDisplay = ({friend}) => {
    return ( 
        <div className="friendsInfo">
            <h1>{friend.name}</h1>
            <h4>{friend.email}</h4>
            <h4>{friend.age}</h4>
            {/* <h4>{friend.id}</h4> */}
        </div>
     );
}
 
export default FriendsDisplay;