import React from 'react'

class LifeCycleDemo extends React.Component {
    constructor(props) {
        super(props);
        console.log('Constructor');
    }
    state = {
        a:0
    };
    componentWillMount = () => {
        console.log('Component will mount');
    }

    componentDidMount = () => {
        console.log('Component Did mount');
    }

    shouldComponentUpdate = () => {
        console.log('Should Componenet mount');
        return true;
    }

    componentWillUpdate = () => {
        console.log('Componenet will update');
    }

    componentDidUpdate = () => {
        console.log('Componenet Did update');
    }

    changeState = e => {
        this.setState({
            a: this.state.a + 10
        })
    } 

    render() {
        console.log('render');
        return (
            <div>
                LifeCycleDemo
                <button onClick={this.changeState}>Change State</button>
                {this.state.a}
            </div>
        )
    }
}

export default LifeCycleDemo;
