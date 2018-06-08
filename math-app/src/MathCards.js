import React, { Component } from 'react';
import { Card, CardTitle, CardText, Slider } from 'react-md';
const style = { maxWidth: 320 };

class MathCards extends Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <Card style={style} className="md-block-centered">
                <CardTitle title="Using CardTitle" subtitle="With CardText" />
                <CardText>
                    <h1>Kenny is Fat</h1>
                    {this.props.first} {this.props.sign} {this.props.second}
                </CardText>
            </Card>
        );
    }
}

export default MathCards;
