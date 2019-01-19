import React from "react";

export default class ShowTheLineProps extends React.Component {
 
	constructor(props) {
        super(props);
        console.log("Props:");
        console.log(props);
        this.lineText = props.lineText || 'no text';
		this.delay = props.delay || 1000;
		
        this.state = { theText : this.lineText }
        setTimeout(() => {
           this.setState({theText : "changed line"});
        }, this.delay); 
    }
    
    render() {
            return (
            <div>
                <h1>Line: { this.state.theText }</h1>
            </div>
        	);
    }
}
