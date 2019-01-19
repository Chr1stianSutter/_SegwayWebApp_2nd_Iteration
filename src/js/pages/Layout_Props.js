import React from "react"
import ShowTheLinePropsTimeout from "../components/ShowTheLinePropsTimeout"

require('../../stylesheets/_all.scss');

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = { theText : "A line of text" }
    }
    /*
    <ShowTheLinePropsTimeout lineText = {"Line 2"} aNum = {1000} />
                <ShowTheLinePropsTimeout lineText = {"Line 3"} aNum = {4000} />
                <ShowTheLinePropsTimeout lineText = {"Line 4"} aNum = {100} />
                */
    render() {
        return (
            <div>
                <ShowTheLinePropsTimeout lineText = {"the Line as a Prop"} delay = {3000} />
                <ShowTheLinePropsTimeout lineText = {"another Line"} delay = {5000} />
                <ShowTheLinePropsTimeout lineText = {"A second"} delay = {1000} />
                <ShowTheLinePropsTimeout lineText = {"8 Seconds"} delay = {8000} />
                <ShowTheLinePropsTimeout  />
            </div>
        );
    }
}