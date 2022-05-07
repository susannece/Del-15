import React, { Component } from "react";
import Form from './Form'
import Showdata from './Showdata'

class Skill extends Component {
    state = {
        skills: [],
    };

    handleSubmit = (skill) => {
        this.setState({skills: [...this.state.skills, skill]})
    }

    render(){
        const {skills} = this.state
        return(
            <div className="container">
                <Showdata skillData={skills} />
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }

}

export default Skill