import React from 'react'

function UserCard(props) {

    return (
        <div>
            <h1>Hello {`${props.user}`}</h1>
        </div>
    )
}

export default UserCard;