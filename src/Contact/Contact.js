import Sidebar from '../Sidebar/Sidebar';
import Nav from '../Home/Nav';
import { useForm, ValidationError } from '@formspree/react';
import './Contact.css';

function Contact() {
  const [state, handleSubmit] = useForm('xpzndrov');
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
    return (
      <div>
      <Sidebar/>
      <Nav/>
        <div className='form-container'>
          <form onSubmit={handleSubmit} className='form'>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder='Your e-mail'
            className='text_input email_input'/>
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}/>
          <textarea
            id="message"
            name="message"
            placeholder='Your message'
            className='text_input msg_input'/>
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}/>
          <button type="submit" disabled={state.submitting} className='submit-btn'>
            Submit
          </button>
      </form>
      </div>
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="contact-wrapper">
            <h6>About</h6>
            <p className="text-justify">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facere ut praesentium quaerat officia maxime quos ea ab modi repudiandae, fugiat, consequuntur ipsam. Voluptatem nobis corporis architecto delectus? Dolore, quis!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, facere ut praesentium quaerat officia maxime quos ea ab modi repudiandae, fugiat, consequuntur ipsam. Voluptatem nobis corporis architecto delectus? Dolore, quis!</p>
          </div>

          <div className="contact-wrapper">
            <h6>Contact us</h6>
            <ul className="footer-links">
              <li>Call us to +1(123)456-78-90</li>
              <li>E-mail us to lorem@ipsum.com</li>
              <li>Find us in New York, NY 10001</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
        </div>
      </div>
</footer>
    </div>
    );
  }
  
  export default Contact;