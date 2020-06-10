import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';

class Register extends Component {
    render() {
        const {
            history
        } = this.props;
        console.log(this.props);
        return(
            <Container>
                <div>Ini Page Register</div>
                    <Button
                    onClick={() => history.goBack()}
                    >Back</Button>
            </Container>
        );
    }
};

export default Register;