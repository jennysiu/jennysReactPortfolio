import "./style.css"

function ContactForm() {
  return (
    <>
    <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
    <h2>Send me a message</h2>
      <div className='contact-details'>
        <p>
          <label><input type="email" name="email" placeholder="Enter email"/></label>
          <p>I'll never share your email with anyone else.</p>
        </p>
        <p>
          <label><input type="text" name="name" placeholder="Name"/></label>
        </p>
      </div>
      <p>
        <label><input type="text" name="subject" placeholder="Subject"/></label>
      </p>
      <p>
        <label><textarea name="message" placeholder="Message"></textarea></label>
      </p>
      <p>
        <button type="submit">Send Message</button>
      </p>
    </form>
    </>
  )
}

export default ContactForm;
