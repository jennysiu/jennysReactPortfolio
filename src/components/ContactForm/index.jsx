import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import './styling/Contact.css';

function ContactForm() {
  return (
    // <Form name="contact" data-netlify="true" method="POST" data-netlify-honeypot="bot-field">
    //   <input type="hidden" name="form-name" value="contact" />

    //   <h2>Send me a message</h2>
    //   <div className='contact-details'>
    //     <Form.Group className="mb-2" controlId="formBasicEmail">
    //       <Form.Label></Form.Label>
    //       <Form.Control type="email" name="email" placeholder="Enter email" />
    //       <Form.Text className="text-muted">
    //         I'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>
        
    //     <Form.Group className="mb-2" controlId="formBasicPName">
    //       <Form.Label></Form.Label>
    //       <Form.Control type="name" name="name" placeholder="Name" />
    //     </Form.Group>
    //   </div>

    //   <Form.Group className="mb-2" controlId="formBasicSubject">
    //     <Form.Label></Form.Label>
    //     <Form.Control type="subject" name="subject" placeholder="Subject" />
    //   </Form.Group>

    //   <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1">
    //     <Form.Label></Form.Label>
    //     <Form.Control as="textarea" rows={3} name="message"  placeholder="Message"/>
    //   </Form.Group>

    //   <Button className="send-button" variant="primary" type="submit">
    //     Send Message
    //   </Button>
    // </Form>

    <form name="contact" method="POST" data-netlify="true">
      <p>
        <label>Your Name: <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Your Email: <input type="email" name="email" /></label>
      </p>
      <p>
        <label>Your Role: <select name="role[]" multiple>
          <option value="leader">Leader</option>
          <option value="follower">Follower</option>
        </select></label>
      </p>
      <p>
        <label>Message: <textarea name="message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  )
}

export default ContactForm;
