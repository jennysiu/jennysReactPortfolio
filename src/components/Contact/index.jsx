import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

// [ ] Must have contact information
// [ ] Have a contact form for handling events

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Form>
        <div className='contact-details'>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-2" controlId="formBasicPName">
            <Form.Label></Form.Label>
            <Form.Control type="name" placeholder="Name" />
          </Form.Group>
        </div>

        <Form.Group className="mb-2" controlId="formBasicSubject">
          <Form.Label></Form.Label>
          <Form.Control type="subject" placeholder="Subject" />
        </Form.Group>

        <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
          <Form.Label></Form.Label>
          <Form.Control as="textarea" rows={3} placeholder="Message"/>
        </Form.Group>

        <Button variant="primary" type="submit">
          Send
        </Button>
      </Form>

      <section className='contact-info'>

      </section>
  
    </div>
  )
}

export default Contact;