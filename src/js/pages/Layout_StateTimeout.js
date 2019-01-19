import React from "react"
import ShowTheLine from "../components/ShowTheLine"

// Require scss files
require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { theText : "A line of text" }
        this.counter = 0; 
        
        // nur ein Aufruf
        setTimeout(() => {
             console.log(this.counter)
             this.counter += 1
             this.setState({theText : "changed line"})
        }, 3000); 
    }

    render() {
         // wird alle 3 Sekunden aufgerufen
 /*       setTimeout(() => {
            this.setState({theText : "changed line"})
            console.log(this.counter)
            this.counter += 1
        }, 1000); */
        return (
            <div>
                <h3>Line: { this.state.theText } { this.counter } </h3>
            </div>
        );
    }
}