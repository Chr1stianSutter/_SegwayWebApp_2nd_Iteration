import React from "react"
import NameComponent from "../components/NameComponent"

require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { prename : "",
                       surname : "" }
    }

    saveButtonPressedPrename(name) {
        console.log(name); 
        this.setState( {prename : name });
    } 

    saveButtonPressedSurname(name) {
        console.log(name);
        this.setState( {surname : name }); 
    } 

    render() {
        return (
            <div>
                <h1>Names</h1>
                <h1>{ this.state.prename + " " + this.state.surname }</h1>
                <NameComponent name = "Hans" buttonClicked={this.saveButtonPressedPrename.bind(this)} />
                <NameComponent buttonClicked={this.saveButtonPressedSurname.bind(this)} />
            </div>
        );
    }
}