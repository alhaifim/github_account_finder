import React, {useContext} from 'react'
import UserItem from './UserItem';
import Spinner from '../layout/Spinner';
import '../../App.css';
import GithubContext from '../../context/github/githubContext';


const Users = ()=> {
    const githubContext = useContext(GithubContext);
    const {loading, users} = githubContext;
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

export default Users;
