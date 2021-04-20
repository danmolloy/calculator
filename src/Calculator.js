import React, { Component } from 'react';
import Display from './Display.js';
import Buttons from './Buttons.js';


class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            display: ''
        }
       this.handleNumber = this.handleNumber.bind(this);
       this.handleClear = this.handleClear.bind(this);
       this.handleOperator = this.handleOperator.bind(this);
       this.handleEquals = this.handleEquals.bind(this);
       this.handleDecimal = this.handleDecimal.bind(this);
       this.handleNegative = this.handleNegative.bind(this);
    }

    componentDidMount() {
        this.handleClear();
    }

    handleNumber(e) {
        if (this.state.display.length === 10) {
            this.handleClear();
        } else if (this.state.display === "0") {
            this.setState({
                display: e.target.value
            });
        } else {
            this.setState({
                display: this.state.display + e.target.value
            });
        }
    }

    handleClear() {
        this.setState({
            display: "0"
        })
    }
    
    handleOperator(e) {
        if (this.state.display.length === 10) {
            this.handleClear();
        }
        const regEx = (/[/*\-+]$/);
        const regExNeg = (/[/*\-+]\-$/);
        if (regExNeg.test(this.state.display)) {
            this.setState({
            display: this.state.display.slice(0, this.state.display.length - 2) + e.target.value
            });
        } else if (regEx.test(this.state.display)) {
            this.setState({
            display: this.state.display.slice(0, this.state.display.length - 1) + e.target.value
            });
        } else {
        this.setState({
            display: this.state.display + e.target.value
            });
        }
    }

    handleEquals() {
        if (eval(this.state.display).length === 10) {
            this.handleClear()
        }
        const regEx = (/[0-9]$/);
        if (regEx.test(this.state.display)) {
            this.setState({
                display: eval(this.state.display)
            });
        }
    }

    handleDecimal() {
        if (this.state.display.length === 10) {
            this.handleClear();
        }
        const regEx = (/[0-9]*\.[0-9]*$/);
        if (!regEx.test(this.state.display)) {
            this.setState({
                display: this.state.display + '.'
            })
        }
    }

    handleNegative() {
        // bugs
        const regExNeg = (/[/*\-+]\-$/);
        if (!regExNeg.test(this.state.display)) {
            this.setState({
            display: this.state.display + '-'
            });
        }
        /*
        const regEx = (/[d+]*[+\-*\\/]?$/);
        if (regEx.test(this.state.display)) {
            this.setState({
                display: this.state.display + '-'
            })
        } */
    }

    render() {
        return (
            <div>
                <Display display={this.state.display} />
                <Buttons 
                handleNumber={this.handleNumber}
                handleClear={this.handleClear}
                handleOperator={this.handleOperator}
                handleEquals={this.handleEquals}
                handleDecimal={this.handleDecimal}
                handleNegative={this.handleNegative}
                />
            </div>
        )
    }
}

export default Calculator;