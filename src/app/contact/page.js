import React from 'react';
import ContactCard from "@/app/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/app/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact Us</h1>
            <ContactCard />

                <section className={styles.contact_section}>
                    <h2>We'd love to hear <span> from you </span></h2>

                    <ContactForm />
                </section>
            </div>

           
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d114487.44785238635!2d72.94814162946744!3d26.27033588244301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39418c4eaa06ccb9%3A0x8114ea5b0ae1abb8!2sJodhpur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1682347125210!5m2!1sen!2sin" 
          width={600} height={450} style={{border:0}} allowfullscreen="" loading="lazy" className={styles.mapping}
           referrerpolicy="no-referrer-when-downgrade"></iframe>

        </>
    );
};

export default Contact;