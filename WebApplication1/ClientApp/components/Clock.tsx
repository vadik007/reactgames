import * as React from 'react';

export class Clock extends React.Component {
    timerID: number;
    constructor(props:any) {
        super(props);
        this.state = { date: new Date() };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            100
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, clock!</h1>
                <h2>It is {this.state.date.getHours() + ":" + this.state.date.getMinutes() + ":" + this.state.date.getSeconds() + ":" + this.state.date.getMilliseconds()}.</h2>
            </div>
        );
    }

    state: { date: Date };
}

