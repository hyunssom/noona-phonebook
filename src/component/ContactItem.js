import React from "react"
import { Row, Col, Form} from 'react-bootstrap'

const ContactItem = () => {
  return (
    <Row>
        <Col>
            <img width={50}
             src="https://media.istockphoto.com/id/1209654046/vector/user-avatar-profile-icon-black-vector-illustration.jpg?s=612x612&w=0&k=20&c=EOYXACjtZmZQ5IsZ0UUp1iNmZ9q2xl1BD1VvN6tZ2UI="/>
        </Col>
        <Col>
            <div> Hybbo </div>
            <div> 0000000 </div>
        </Col>
    </Row>
  )
}
export default ContactItem