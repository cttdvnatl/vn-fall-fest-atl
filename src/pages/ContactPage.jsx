import React, { useRef } from 'react';
import { useTranslation } from 'react-multi-lang';
import emailjs from '@emailjs/browser';

const ContactPage = () => {
    const t = useTranslation();

    const form = useRef();
    const submit = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        submit.current.remove()
        emailjs.sendForm('service_sp14yo9', 'template_32mxm9p', form.current, 'user_1frMaiJsHvHVAu5PqTi5X')
          .then((result) => {
              console.log(result.text);
              window.location.href = "/form-success";
          }, (error) => {
              console.log(error.text);
              window.location.href = "/form-error";
          });
    };
//<iframe title="directions" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3310.1689927301713!2d-84.15927998466083!3d33.93678138063755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f5a38e4dc6feff%3A0xa3ef814945ace642!2sHoly%20Vietnamese%20Martyrs%20Catholic%20Church!5e0!3m2!1sen!2sus!4v1642037478380!5m2!1sen!2sus" width="600" height="450" style={{border: '0'}} allowfullscreen="" loading="lazy"/>
    return (
        <>
        <div class="contact-page">
            <h1>{t('contact.pageTitle')}</h1>
            <form ref={form} onSubmit={sendEmail}>
                {/* False Form/Honeypot */}<input type="text" name="_form" style={{display: 'none'}}/>
                <div class="contact-form-row">
                    <div class="contact-form-input contact-form-input-name">
                        <label>{t('contact.textBoxName')}:</label>
                        <input type="text" name="user_name" />
                    </div>
                    <div class="contact-form-input contact-form-input-email">
                        <label>{t('contact.textBoxEmail')}:</label>
                        <input type="email" name="user_email" />
                    </div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-input contact-form-input-message">
                        <label>{t('contact.textBoxMessage')}</label>
                        <textarea name="message" />
                    </div>
                </div>
                <div class="contact-form-row">
                    <input ref={submit} class="contact-form-submit" type="submit" value="Send" />
                </div>
            </form>
        </div>
        </>
    )
}

export default ContactPage;