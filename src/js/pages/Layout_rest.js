import React from "react";
import Header from "../components/Header";

export default class Layout extends React.Component{
    constructor() {
        super();
        this.state = {
            title: "Welcome",
            text: "Hallo",
        };
    }

    componentDidMount(){
    fetch(`http://jsonplaceholder.typicode.com/posts`)
        .then(result=>result.json())
        .then(items=>this.setState({items}))
    }
    
    changeTitle(newTitle) {
        this.setState({ title: newTitle });
    }

    buttonclicked() {
        this.setState({ title: "" });
    }

    render() {
        return (
            <div>
                <h1> {this.state.title} </h1>
                <br />
                <Header buttonclicked = {this.buttonclicked.bind(this)} changeTitle={this.changeTitle.bind(this)} title={this.state.title} />
                <ul>
                    {this.state.items.length ? this.state.items.map(item=><li key={item.id}>{item.body}</li>) : <li>Loading...</li> }
                </ul>
           </div>
        );
    }
}