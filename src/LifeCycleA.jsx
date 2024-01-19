import React, { Component } from 'react';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "hariharane",
        };
        console.log("LifeCycleA Constructor ");


    }

    componentDidMount() {
        console.log("LifeCycleA componentDidMount")
    }

    static getDerivedStateFromProps() {
        console.log("LifeCycleA getDerivedStateFromProps ")
        return null;

    }

    render() {
        console.log("LifeCycleA render")
        return (
            <div>
                LifeCycleA  component LifeCycle method
            </div>
        );
    }
}

export default LifeCycle;