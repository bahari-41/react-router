import React, { Component } from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Home extends Component {
    render() {
        return(
            <Container>
                <div>Ini Page Home</div>
                <Link to='/Login'>
                    <Button>Login</Button>
                </Link>
            </Container>
        );
    }
};

export default Home;