import React, { Component } from "react";

class ContinentButton extends React.Component{
    render(){
        return <a href=""><span>{this.props.continentCode} - {this.props.continent} </span></a>
    }
}

export default ContinentButton