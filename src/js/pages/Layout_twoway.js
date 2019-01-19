import React from "react";
import Header from "../components/Header";

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "Welcome"
        };
    }
    
    changeTitle(newTitle) {
        this.setState({ title: newTitle });
    }

    buttonclickedLayout() {
        this.setState({ title: "" });
    }

    buttonclickedLayout2() {
        this.setState({ title: "Init" });
    }

    render() {
        return (
            <div>
                <h1> Layout: {this.state.title} </h1>
                <button type="button" class="btn btn-warning" onClick={this.buttonclickedLayout.bind(this)}>Delete the text from Layout</button> 
                <br />
                <Header buttonclicked={this.buttonclickedLayout.bind(this)} 
                        changeTitle={this.changeTitle.bind(this)} 
                        title={this.state.title} />

                <Header buttonclicked={this.buttonclickedLayout2.bind(this)} 
                        changeTitle={this.changeTitle.bind(this)} 
                        title={this.state.title} />
           </div>
        );
    }
}