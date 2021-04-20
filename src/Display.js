import React, { Component } from 'react'

class Display extends React.Component {
    constructor(props) {
        super(props) 
    }
    render() {
        return (
            <div id="screen">
                <div id="display">{this.props.display}</div>
            </div>
        )
    }

}

export default Display;