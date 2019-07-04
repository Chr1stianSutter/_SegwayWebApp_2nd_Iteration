import React from "react";
import Button from 'react-bootstrap/lib/Button';

export default class MusicButton extends React.Component {


    render() {

        return (
            <div>
                <Button block>
                  <i class="glyphicon glyphicon-music"></i>
                </Button>
            </div>
        );
    }
}
