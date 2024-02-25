import { useNavigate } from 'react-router-dom';
import "./style.css"

function ContactForm() {
  let navigate = useNavigate()
  const submitHandler = (e) =>{
    e.preventDefault();
    let myForm = e.target;
    let formData = new FormData(myForm);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => navigate('/contact'))
      .catch((error) => alert(error));
  }
  
  return (
    <>
    <form name="contact" method="POST" data-netlify="true" onSubmit={submitHandler} netlify-honeypot="bot-field">
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
