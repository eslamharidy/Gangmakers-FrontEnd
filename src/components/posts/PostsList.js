import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';

export default function PostsList({ posts }) {
    if (!posts) {
        return 'Loading...'
    }

    if (!posts.length) {
        return 'No tickets'
    }

    const { length } = posts



    const content = posts.map(post => {
        return <Container style={{ marginTop: '10px' }} key={post.id}>

            <Row>
                <Col>
                    <h1 style={{ height: '150px', width: '180px' }}> {post.owner} </h1>
                </Col>
                <Col xs={6}><p>{post.content} </p>
                </Col>
            </Row>


        </Container>
    })

    const style = { textDecoration: "none", position: "center" }

    return <div>
        <h2>{length} posts below!</h2>

        <ul style={style}>
            {content}
        </ul>
    </div>
}