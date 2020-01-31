import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';

export default function Userslist({ users }) {
    if (!users) {
        return 'Loading...'
    }
    
    if (!users.length) {
        return 'No users'
    }

    const { length } = users
    

    const content = users.map(user => {
        let followers= !user.followers.length ? 0 : user.followers.length

        return <Container style={{marginTop:'10px'}} key={user.id}>
            <Link to={`/user/${user.id}/posts`}>
           <Row>
             <Col>
             <h1 style={{height:'150px', width:'180px'}}> {user.name} </h1>
             </Col>

             <Col xs={6}>
                 <p>{user.city} </p>
                <p>{user.age}</p></Col>
             <Col><p>{followers} Followers</p>
             </Col>
           </Row>
           </Link>
         </Container>
    })

    const style = { listStyle: "none", position: "center" }

    return <div>
        <h2>{length} users available!</h2>

        <ul style={style}>
            {content}
        </ul>
    </div>
}