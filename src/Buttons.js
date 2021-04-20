import React, { Component } from 'react'

class Buttons extends React.Component {
    constructor(props) {
        super(props);
    }


    render () {
        return (
            <div id="buttons">
                <div className="row">
                    <button id="negative" onClick={this.props.handleNegative}>+/-</button>
                    <button id="divide" onClick={this.props.handleOperator} value={"/"}>/</button>
                    <button id="multiply" onClick={this.props.handleOperator} value={"*"}>X</button>
                    <button id="clear" onClick={this.props.handleClear}>C</button>
                </div>
                <div className="row">
                    <button id="seven" onClick={this.props.handleNumber} value="7">7</button>
                    <button id="eight" onClick={this.props.handleNumber} value="8">8</button>
                    <button id="nine" onClick={this.props.handleNumber} value="9">9</button>
                    <button id="subtract" onClick={this.props.handleOperator} value={"-"}>-</button>
                </div>
                <div className="row">
                    <button id="four" onClick={this.props.handleNumber} value="4">4</button>
                    <button id="five" onClick={this.props.handleNumber} value="5">5</button>
                    <button id="six" onClick={this.props.handleNumber} value="6">6</button>
                    <button id="add" onClick={this.props.handleOperator} value={"+"}>+</button>
                </div>
                <div className="row" id="second-row">
                    <button id="one" onClick={this.props.handleNumber} value="1">1</button>
                    <button id="two" onClick={this.props.handleNumber} value="2">2</button>
                    <button id="three" onClick={this.props.handleNumber} value="3">3</button>
                </div>
                <div className="row" id="bottom">
                    <button id="zero"onClick={this.props.handleNumber} value="0">0</button>
                    <button id="decimal" onClick={this.props.handleDecimal}>.</button>
                    <div >
                        <button id="equals" onClick={this.props.handleEquals}>=</button>
                    </div>
                    

                </div>

            </div>
        )
    }
}

export default Buttons;
