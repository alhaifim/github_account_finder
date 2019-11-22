import React, { Component } from 'react'
import UserItem from './userItem.component';
import '../../App.css'

class Users extends Component {
    render() {
        return (
            <div className="user-style">
                {this.props.users.map(user=> 
                    <UserItem key={user.id} user={user}/>)}
            </div>
        )
    }
}

export default Users;
