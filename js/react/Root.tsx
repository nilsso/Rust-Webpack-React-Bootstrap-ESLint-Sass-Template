import '../scss/App.scss';
import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const NAME = "Rust, Wasm, TypeScript, and React";

type RootProps = { wasm: Wasm };
export default function Root(props: RootProps): Element {

    const { wasm } = props;

    const handleClick = () => {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        alert('Warning ' + wasm.hello(NAME));
    };

    return (
        <Container id='main'>
            <Row>
                <Col>
                    <Button block onClick={handleClick}>Click Me!</Button>
                </Col>
            </Row>
        </Container>
    );
}
