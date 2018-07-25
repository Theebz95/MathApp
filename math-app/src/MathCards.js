import React, { Component } from 'react';
import { Card, CardTitle, CardText, Slider, Button, CardActions, TextField } from 'react-md';

const style = { maxWidth: 320 };

class MathCards extends Component {

    constructor(props) {
        super(props);
        this.state = {
            input: 0,
        };
    }
    sendAnswers() {
        this.props.validateAnswer(this.state.input);
        this.setState({input:0})
    }
    render() {
        return (
            <Card style={style} className="md-block-centered">
                <CardTitle title="Using CardTitle" subtitle="With CardText" />
                <CardText>
                    <h1>{this.props.points}</h1>
                    <h2>{this.props.first} {this.props.sign} {this.props.second}</h2>
                    <br />
                    <TextField
                        id="answer"
                        type="number"
                        value={this.state.input}
                        onChange={(value) => this.setState({input:value})}
                        required
                    />
                </CardText>
                <CardActions className="md-divider-border md-divider-border--top">
                    <Button raised primary onClick={() => this.sendAnswers()}>Submit Answer</Button>
                </CardActions>
            </Card>
        );
    }
}

export default MathCards;
