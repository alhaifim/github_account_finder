import React, { Component } from 'react'
import UserItem from './userItem.component';
import Spinner from '../layout/spinner.component';
import PropTypes from 'prop-types';
import '../../App.css'

const Users = ({users, loading})=> {
   if(loading){
       return <Spinner />
   }else{
    return (
        <div className="user-style">
            {users.map(user=> 
                <UserItem key={user.id} user={user}/>)}
        </div>
    )

   }
       
}
Users.propTypes ={
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
};

export default Users;
