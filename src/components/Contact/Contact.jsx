import React, {useState} from 'react'
import '../../Assets/css/Contact.css'
import emailjs from '@emailjs/browser';
import AddedCont from './AddedCont';

import {RiSendPlaneLine} from "react-icons/ri";

const Result = () => {
    return (
        <p>Your message has been successfully send. I will contact you soon.</p>
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
            <section className="contact" id="contact" style={{zIndex: 100, position: 'relative'}}>
                <div id='now'>
                    Contact me with E-mail 😄
                </div>
                <div className="form_div">
                    <form onSubmit={sendEmail} className="form_form">
                        <div>
                            <label className='label' htmlFor="name">Name</label>
                            <input type="text" id='name' name="from_name" placeholder="Enter Name" required="required"/>
                            <label className='label' htmlFor="email">Email</label>
                            <input type="email" id='email' name="email" placeholder="Enter Your Email"
                                   required='required'/>
                            <label htmlFor="number" className='label'>Number</label>
                            <input type="number" className='number' id='number' name="number"
                                   placeholder="Enter Mobile Number" required='required'/>
                        </div>
                        <div>
                            <label htmlFor="message" className='label'>Message</label>
                            <textarea name="message" id='message' rows="4" placeholder="Message" col='5'
                                      required='required'/>
                            <button type="submit" className='submit'>
                                Send <RiSendPlaneLine/>
                            </button>
                        </div>
                    </form>
                    <div> {result ? <Result/> : null} </div>
                </div>
            </section>
            <AddedCont/>
        </>
    )
}
