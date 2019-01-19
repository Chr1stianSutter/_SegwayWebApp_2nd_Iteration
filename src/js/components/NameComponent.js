import React from"react";

export default class NameComponent extends React.Component {

    constructor(props) {
        super(props);

        this.state = { name : props.name || "" };
    }

    textChanged(e) {
        console.log(e.target.value);
        this.setState({ name : e.target.value}); 
    }

    saveButtonPressed(e) {
        this.props.buttonClicked(this.state.name);
    }
    
    render() {
        return (
            <div>
                <input value={this.state.name} onChange={this.textChanged.bind(this)} />
                <br />
                <button type="button" class="btn btn-danger" onClick={this.saveButtonPressed.bind(this)}>Save</button> 
            </div>
        );
    }
}