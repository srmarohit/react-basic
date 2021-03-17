import React, { Component } from 'react';

class Life_Cycle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        };
    }

    componentDidMount() {
        console.log("component mounted..")
        this.interval = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        console.log("component unmount..")
        clearInterval(this.interval);
    }

    tick = () => {
        console.log("tick method called..")
        this.setState({ count: this.state.count + 1 });
 }

    render() {
        return (
            <h1>{this.state.count}</h1>
        );
    }
}

export default Life_Cycle;