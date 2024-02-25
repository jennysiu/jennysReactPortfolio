import "./style.css"

// function ContactForm() {
//   // function to handle submit button
//   function handleSubmit(event) {
//     event.preventDefault();
//   }
  
  return (
    <>
    <form name="contact" method="POST" data-netlify="true" onSubmit="submit" netlify-honeypot="bot-field"
    action="/contact">
      {/* hidden input to help netlify identify the form */}
      <input type="hidden" name="form-name" value="contact" />
      

      <h2>Send me a message</h2>
      <div className='contact-details'>
        <div>
          <input type="email" name="email" placeholder="Enter email"/>
          <p>I'll never share your email with anyone else.</p>
        </div>
        <input type="text" name="name" placeholder="Name"/>
      </div>
        <input type="text" name="subject" placeholder="Subject"/>
        <textarea name="message" placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
    </form>
    </>
  )
}

export default ContactForm;
