import React from 'react';
import NavbarСontainer from './navbar-container'
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

interface MyProps { }

function Template(props: React.PropsWithChildren<MyProps>) {
    return <>
        <NavbarСontainer />
        <Container>{props.children}</Container>
        <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"></script>
        <script>var Alert = ReactBootstrap.Alert;</script>
    </>;
}

export default Template;
