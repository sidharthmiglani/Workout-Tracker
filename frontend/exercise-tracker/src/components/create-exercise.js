import React, { Component } from 'react';

// we do not do let User = "name" in React, but we use state 
export default class CreateExercise extends Component {
    
    constructor(props){
        super(props);

        this.state ={
            username : '',
            description : '',
            duration: 0,
            date: new Date(),
            users: []
        }
    }

    onChangeUsername(e){
        this.setState({
            username: e.target.value
        })
    }

    onChangeDuration(e){
        this.setState({
            duration: e.target.value
        })
    }

    onChangeDate(date){
        this.setState({
            date: date
        })
    }

    onChangeDescription(e){
        this.setState({
            description: e.target.description
        })
    }

    onSubmit(e){
        e.preventDefault();
        const exercise = {
            username: this.state.username,
            description: this.state.description,
            duration: this.state.duration,
            date: this.state.date
        }
        console.log(exercise);
        window.location = '/';
    }

    render() {
        return (
            <div>
                <p> Create Exercise component</p>
            </div>
        )
    }
}