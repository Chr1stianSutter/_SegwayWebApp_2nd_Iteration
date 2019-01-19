import React from "react";

export default class ShowAnotherLine extends React.Component {
	constructor() {
		super();
		
		this.state = { theText: "A line of text" }
		
	}

    render() {
    	console.log(this.props); 
        const timeout = this.props.time ? this.props.time : 1000; 
    	setTimeout(() => { 
    		this.setState({theText: "changed line"}
    	)}, timeout);

        const theText = "The new line";
        return (
            <div>
                Line: { this.state.theText }
            </div>
        );
    }
}
