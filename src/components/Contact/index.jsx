import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// [ ] Must have contact information
// [ ] Have a contact form for handling events

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
      <div className='contact-details'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Name</Form.Label>
          <Form.Control type="name" placeholder="Name" />
        </Form.Group>
      </div>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Subject</Form.Label>
        <Form.Control type="subject" placeholder="Subject" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Example textarea</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button variant="primary" type="submit">
        Send
      </Button>
    </Form>
  
    </div>
  )
}

export default Contact;