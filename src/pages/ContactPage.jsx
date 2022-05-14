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
    const type = useRef();
    const message = useRef();
    const textErrorMessage = useRef();
    const captchaErrorMessage = useRef();
    const [captcha, setCaptcha] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        if (type.current.value !== 'select' && message.current.value !== '' && captcha === true) {
            submit.current.remove();
            emailjs.sendForm('service_hrn94wi', 'template_tnxqprj', form.current, '-ZHFDCmDLZL4Veu0z')
              .then((result) => {
                  //console.log(result.text);
                  window.location.href = "/form-success";
              }, (error) => {
                  //console.log(error.text);
                  window.location.href = "/form-error";
              });
        }
        if (type.current.value === 'select' || message.current.value === '') {
            textErrorMessage.current.style.display = 'block';
        }
        if (captcha === false) {
            captchaErrorMessage.current.style.display = 'block';
        }
    };

    return (
        <>
        <div class="contact-page">   
            <div class="contact-form">
                <h1>{t('contact.pageTitle')}</h1>
                <form ref={form} onSubmit={sendEmail}>
                    {/* False Form/Honeypot */}
                    <input type="text" name="_form" style={{display: 'none'}}/>
                    <div class="contact-form-row">
                        <div class="contact-form-input contact-form-input-name">
                            <input placeholder={' ' + t('contact.textBoxName') + ' (optional)'} ref={nameInput} type="text" name="user_name" />
                        </div>
                        <div class="contact-form-input contact-form-input-email">
                            <input placeholder={' ' + t('contact.textBoxEmail') + ' (optional)'} ref={emailInput} type="email" name="user_email" />
                        </div>
                    </div>
                    <div class="contact-form-row">
                        <div class="type">
                            <label for="type">Subject:</label>
                            <select name="type" ref={type}>
                                <option value="select" disabled selected hidden>Select a Subject</option>
                                <option value="General Information">General Information</option>
                                <option value="Sponsorship">Sponsorship</option>
                                <option value="Volunteering">Volunteering</option>
                                <option value="Support and Donation">Support and Donation</option>
                            </select>
                        </div>
                    </div>
                    <div class="contact-form-row">
                        <div class="contact-form-input contact-form-input-message">
                            <textarea placeholder={' ' + t('contact.textBoxMessage')} ref={message} name="user_message" />
                        </div>
                    </div>
                    <h4 ref={textErrorMessage} style={{padding: '10px', margin: 'auto', fontFamily: 'sans-serif', display: 'none', color: 'red'}}>Fill in ALL REQUIRED fields</h4>
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
        </div>
        </>
    )
}

export default ContactPage;