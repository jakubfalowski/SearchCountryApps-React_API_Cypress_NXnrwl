import React, { Component } from "react";
import './ContinentButton.css'

class ContinentButton extends React.Component{
    render(){
        return <span className={this.props.continentCode}><a href={this.props.continentCode}>{this.props.continentCode} - {this.props.continent} </a></span>
    }
}

export default ContinentButton