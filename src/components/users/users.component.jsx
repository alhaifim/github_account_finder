import React, { Component } from 'react'
import UserItem from './userItem.component';
import '../../App.css'

class Users extends Component {
    constructor(){
        super();
        this.state ={
            users: [
                {
                    id: 'id',
                    login: 'mojombo',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/1?v=4',
                    html_url: 'https://github.com/mojombo'
                },
                {
                    id: 'id',
                    login: 'defunkt',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/2?v=4',
                    html_url: 'https://github.com/defunkt'
                },
                {
                    id: 'id',
                    login: 'pjhyett',
                    avatar_url: 'https://avatars0.githubusercontent.com/u/3?v=4',
                    html_url: 'https://github.com/pjhyett'
                }


            ]
        }
    }
    render() {
        return (
            <div className="user-style">
                {this.state.users.map(user=> 
                    <UserItem key={user.id} user={user}/>)}
            </div>
        )
    }
}

export default Users;
