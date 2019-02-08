import React from "react";
import Button from 'react-bootstrap/lib/Button';

const style = {
    height: '80px',
    width: '200px',
    fontSize: '24px',
    fontWeight: 'bold'
};

export default class Header extends React.Component {

    render() {

        return (
            <div>
                <Button bsStyle="warning" style="style" block > NAVI </Button>
            </div>
        );
    }
}
