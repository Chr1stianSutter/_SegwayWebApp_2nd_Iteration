import React from "react";

export default class Layout extends React.Component {
    constructor() {
        super();
        this.state = {
            prename: "",
            surname: "",
            isEdit : true,
            format : 0
        };
    }

    prenameChanged(e) {
        //console.log(e.target);
        this.setState({prename : e.target.value});
    }

    surnameChanged(e) {
        //console.log(e.target);
        this.setState({surname : e.target.value});
    }

    editClicked(e) {
         this.setState({isEdit: !this.state.isEdit });
    }

    formatClicked(e) {
        this.state.format == 0 ? this.setState({format: 1 }) : this.setState({format: 0 }); 
    }

    render() {
        return (
            <div>
                <h1>String Concat</h1>

                {this.state.isEdit ?  <button type="button" class="btn btn-success" onClick={this.editClicked.bind(this)}>Edit Mode</button> 
                                    : <button type="button" class="btn btn-default" onClick={this.editClicked.bind(this)}>Static Mode</button> }
                
                {this.state.isEdit ? <input value={this.state.prename} onChange={this.prenameChanged.bind(this)} /> 
                                    : this.state.prename}

                {this.state.isEdit ? <input value={this.state.surname} onChange={this.surnameChanged.bind(this)} /> 
                                    : " " + this.state.surname}    

                <h2> {this.state.format == 0 ? this.state.prename + " " + this.state.surname :  this.state.surname + ", " + this.state.prename} </h2>               

                <button type="button" class="btn btn-warning" onClick={this.formatClicked.bind(this)}>Format {this.state.format} </button> 
            </div>
        );
    }
}
