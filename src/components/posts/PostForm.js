import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';


export default function PostForm({onSubmit, onChange, formValues})  {

        return <div> 
                <h2>Add your Post!</h2>
                <Form onSubmit={onSubmit}>
                <Row>
                     <Col>
                        content:
                        <Form.Control type="text" value={ formValues&& formValues.content } name="content" placeholder='your post' onChange={onChange} />
                        </Col>

                </Row>
                <Row>
                        
                </Row>
                        <Button style={{margin:'3px'}} variant="primary" type="submit" value='Submit'>
                            Submit
                         </Button>
                </Form>
                </div>
    }




    

    
  
