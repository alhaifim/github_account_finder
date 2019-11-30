import React, {useReducer} from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USER,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
} from '../types';

// create intial state
 const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }

    // Dispatch type to the reducer

    const [state, dispatch] = useReducer(GithubContext, initialState);

    // Search Users

    // Get User

    // Get Repos

    // Clear Users

    // Set Loading 

    return (
        <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading
        }}>
        
        </GithubContext.Provider>
    )

}
export default GithubState;