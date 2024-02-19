import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './style.css';

// [ ] Must have contact information
// [ ] Have a contact form for handling events

function Contact() {
  return (
    <div className='contact-container'>
      <section className='contact-info'>
        <h1>Get in touch</h1>
        <p className='contact-intro'>I'd love to hear from you. I'm always open to discussing new ideas and projects.</p>
        <p>Email: jenny.siu79@gmail.com</p>
        <div className='contact-links'>
          <a href="https://github.com/jennysiu">
            <i className="fa-brands fa-github"></i>
          </a>
          <a href="https://www.linkedin.com/in/jenny-siu-534576156/">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="mailto:jenny.siu79@gmail.com">
            <i className="fa-solid fa-envelope"></i>
          </a>
        </div>
      </section>

      <Form>
        <h2>Send me a message</h2>
        <div className='contact-details'>
          <Form.Group className="mb-2" controlId="formBasicEmail">
            <Form.Label></Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              I'll never share your email with anyone else.
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

        <Button className="send-button" variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  )
}

export default Contact;