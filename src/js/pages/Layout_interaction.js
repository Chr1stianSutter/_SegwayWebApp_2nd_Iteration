import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Hi there",
            title2: "Meine Website",
            isEdit : true,
            noClicks : 0
        };
    }

    inputChanged(e) {
        console.log(e.target);
        this.setState({title : e.target.value });
    }


    buttonclicked(e) {
        console.log("Button clicked");
        this.setState( {noClicks : this.state.noClicks+1 });
    }

    render() {
        console.log("render");
        console.log(this.state.title);
        return (
            <div>
                <h1>{this.state.title} : { this.state.noClicks } mal geklickt</h1>
                <input value={this.state.title} onChange={this.inputChanged.bind(this)} />
                <button type="button" class="btn btn-success" onClick={this.buttonclicked.bind(this)}>Click me!</button> 

            </div>
        );
    }
}
