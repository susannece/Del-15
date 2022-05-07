import React, {Component} from "react";

 class Form extends Component{
    initialState = {
        skill: '',
    }

    state = this.initialState

    submitForm = () => {
        this.props.handleSubmit(this.state)
        this.setState(this.initialState)
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({[name]: value,})
    } 

     render(){
        const {skill} = this.state;

        return (
            <form>
                <div className="mb-3">
                <input type="text" name="skill" id="skill" value={skill} onChange={this.handleChange}/>
                <input type="button" value="Submit" onClick={this.submitForm} />
                </div>
            </form>
        );
    } 

}

export default Form