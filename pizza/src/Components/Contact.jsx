import React from 'react';
import './Contact.css';
import Footer from './Footer';

const EventPlanner = () => {
    return (
        <div className="event-planner-container">
            
            <section className="contact">
                <h2>Contact Us</h2>
                <form>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <textarea placeholder="Message"></textarea>
                    <button className="submit-button">Send</button>
                </form>
            </section>
            <div>
                {<Footer/>}
            </div>
        </div>
    );
};

export default EventPlanner;
