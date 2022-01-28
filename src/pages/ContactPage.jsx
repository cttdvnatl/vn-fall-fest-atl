import React, { useRef, useState } from 'react';
import { useTranslation } from 'react-multi-lang';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactPage = () => {
    const t = useTranslation();

    const form = useRef();
    const submit = useRef();
    const nameInput = useRef();
    const emailInput = useRef();
    const message = useRef();
    const textErrorMessage = useRef();
    const captchaErrorMessage = useRef();
    const [captcha, setCaptcha] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();
        if (nameInput.current.value !== '' && emailInput !== '' && message !== '' && captcha === true) {
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
        if (nameInput.current.value === '' && emailInput.current.value === '' && message.current.value === '') {
            textErrorMessage.current.style.display = 'block';
        }
        if (captcha === false) {
            captchaErrorMessage.current.style.display = 'block';
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
                        <input placeholder={' ' + t('contact.textBoxName')} ref={nameInput} type="text" name="user_name" />
                    </div>
                    <div class="contact-form-input contact-form-input-email">
                        <input placeholder={' ' + t('contact.textBoxEmail')} ref={emailInput} type="email" name="user_email" />
                    </div>
                </div>
                <div class="contact-form-row">
                    <div class="contact-form-input contact-form-input-message">
                        <textarea placeholder={' ' + t('contact.textBoxMessage')} ref={message} name="message" />
                    </div>
                </div>
                <h4 ref={textErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Fill in ALL fields</h4>
                <h4 ref={captchaErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Captcha Failed</h4>
                <div class="captcha" style={{textAlign: 'center'}}>
                        <ReCAPTCHA
                            style={{margin: 'auto', display: 'inline-block'}}
                            sitekey="6LdxPhkeAAAAAKQ0myRsb9eAPskcHKCn8rYNBncj"
                            onChange={() => setCaptcha(true)}
                        />
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