import React from"react";

export default class Header extends React.Component {

    handleChange(e) {
        const title = e.target.value;
        this.props.changeTitle(title);
    }

    buttonclicked(e) {
        this.props.buttonclicked();
    }

    render() {

        return (
            <div>
                <h3> Header: {this.props.title} </h3>
                <input value={this.props.title} onChange={this.handleChange.bind(this)} />
                <br />
                <button type="button" class="btn btn-danger" onClick={this.buttonclicked.bind(this)}>Delete the text</button> 
            </div>
        );
    }
}
