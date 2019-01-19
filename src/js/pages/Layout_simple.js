import React from "react"
import ShowTheLine from "../components/ShowTheLine"

// Require scss files
require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    constructor() {
        super();
        this.theText = "A line of text";
        this.myValue = 42;
    }

    theAlgorithm(aNumber) {
        return "calculated value: " + aNumber.toString() ;
    }

    render() {
        this.theText += " - render"; 
        const myExText = "Hallo";
        return (
            <div>
                <h1>My First Page</h1>
                <h3>Line: { myExText } </h3>
                <h3>Value: { this.theAlgorithm(45) } </h3>
                <ShowTheLine />
                <ShowTheLine />
                <ShowTheLine />
                <ShowTheLine />
                <ShowTheLine />
            </div>
        );
    }
}