import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


export default class ExercisesList extends Component {
    constructor(props) {
        super(props);
        this.deleteExercise = this.deleteExercise.bind(this);
        this.state = { exercises: [] };

    }

    componentDidMount() {
        axios.get('http://localhost:5000/exercises/')
            .then(res => {
                this.setState({ exercises: res.data })
            }).catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <p> Exercise List component</p>
            </div>
        )
    }
}