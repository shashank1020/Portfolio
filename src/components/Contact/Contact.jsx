import React,{ useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';
import AddedCont from './AddedCont';
const Result = ()=>{
  return (
    <>
      <p>Your message has been successfully send. I will contact you soon.</p>
    </>
  )
}
export const Contact = () => {
  const [result, showResult] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_2fhvrdd', 'template_dbi8pv1', e.target, 'GYnZXekX8K6mNkFBf')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      showResult(true);
      setTimeout(() => {
        showResult(false);
      }, 5000);
  };
  return (
    <>
    <section className="contact" id="contact" >
      <div>
        Now don't be shy contact me
      </div>
          <div className="form_div">
        <form onSubmit={sendEmail} className="form_form" >
          <div>
            <p>Name</p>
            <input type="text" name="from_name" placeholder="Enter Name" required/>
            <p>Email</p>
            <input type="email" name="email" placeholder="Enter Your Email"  requred/>
            <p>Number</p>
            <input type="number" name="number" pattern="/^-?\d+\.?\d*$/" placeholder="Enter Mobile Number" required/>
          </div>
          <div>
            <p>Message</p>
            <textarea name="message" rows="4" placeholder="Message" col='5' required/>
            <input type="submit" value="Send"/>
          </div>
        </form>
            <div> {result ? <Result/> : null} </div>
          </div>
    </section>
    <AddedCont />
    </>
  )
}
