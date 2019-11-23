import React, { Component } from 'react'

class Search extends Component {
    state={
        text: ''
    };

    handleChange =(e)=>{
        this.setState({[e.target.name]: e.target.value});
    }
    handleSubmit = e =>{
        e.preventDefault();
        console.log(this.state.text);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}className="form">
                <input type="text" 
                name="text" placeholder="Search Users..."
                value={this.state.text}
                onChange={this.handleChange}/>
                <input type="submit" value="Search" className="btn btn-dark btn-block"/>
                </form>
            </div>
        )
    }
}

export default Search;
