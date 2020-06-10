import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Login extends Component {
    render() {
        return(
            <Container>
                <div>Ini Page Login</div>
                <Link to='/Register'>
                    <Button>Register</Button>
                </Link>
            </Container>
        );
    }
};

export default Login;