import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            title: "Hi there",
            isEdit : true
        };
    }

    inputChanged(e) {
        console.log(e.target);
        this.setState({title : e.target.value});
    }

    buttonclicked(e) {
         this.setState({isEdit: !this.state.isEdit });
    }

    render() {
        console.log("render");
        console.log(this.state.title);
        return (
            <div>
                <h1>{this.state.title}</h1>

                {this.state.isEdit ?  <button type="button" class="btn btn-success" onClick={this.buttonclicked.bind(this)}>Edit</button> 
                                    : <button type="button" class="btn btn-warning" onClick={this.buttonclicked.bind(this)}>Click to Edit</button> }
                
                {this.state.isEdit ? <input value={this.state.title} onChange={this.inputChanged.bind(this)} /> 
                                    : <h2>{ this.state.title }</h2>}
            </div>
        );
    }
}
