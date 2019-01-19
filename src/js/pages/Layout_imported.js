import React from "react"
import ShowTheLine from "../components/ShowTheLine"
import ShowAnotherLine from "../components/ShowAnotherLine"


// Require scss files
require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    constructor() {
        super();
        this.theText = "A line of text";
    }

    render() {
        return (
            <div>
                <h3>Line: { this.theText } </h3>
                <ShowTheLine theText = {"line 1"}/>
                <ShowTheLine theText = {"line 2"}/>
                <ShowTheLine theText = {"line 3"}/>
                <ShowAnotherLine />
                <ShowAnotherLine time = { 2000 }/>
                <ShowAnotherLine time = { 3000 }/>
            </div>
        );
    }
}