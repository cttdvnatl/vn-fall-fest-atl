import React, { useRef } from 'react';
import { useTranslation } from 'react-multi-lang';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const t = useTranslation();

    const form = useRef();
    const submit = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const message = useRef();
    const errorMessage = useRef();


    const sendEmail = (e) => {
        e.preventDefault();
        if (nameInput.current.value !== '' && emailInput !== '' && message !== '') {
            submit.current.remove()
            emailjs.sendForm('service_sp14yo9', 'template_32mxm9p', form.current, 'user_1frMaiJsHvHVAu5PqTi5X')
              .then((result) => {
                  console.log(result.text);
                  window.location.href = "/form-success";
              }, (error) => {
                  console.log(error.text);
                  window.location.href = "/form-error";
              });
        }
        else {
            errorMessage.current.style.display = 'block';
        }
    };

    return (
        <>
        <div class="contact-page">
            <h1>{t('contact.pageTitle')}</h1>
            <form ref={form} onSubmit={sendEmail}>
                {/* False Form/Honeypot */}
                <input type="text" name="_form" style={{display: 'none'}}/>
                <div class="contact-form-row">
                    <div class="contact-form-input contact-form-input-name">
                        <label>{t('contact.textBoxName')}:</label>
                        <input ref={nameInput} type="text" name="user_name" />
                    </div>
                    <div class="contact-form-input contact-form-input-email">
                        <label>{t('contact.textBoxEmail')}:</label>
                        <input ref={emailInput} type="email" name="user_email" />
                    </div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-input contact-form-input-message">
                        <label>{t('contact.textBoxMessage')}</label>
                        <textarea ref={message} name="message" />
                    </div>
                </div>
                <h4 ref={errorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Fill in ALL fields</h4>
                <div class="contact-form-row">
                    <input ref={submit} class="contact-form-submit" type="submit" value="Send" />
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactPage;