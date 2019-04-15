import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3088.435369999549!2d-74.56583268467924!3d39.278375979513605!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c0eacc06f24575%3A0x3de693d92bc222c5!2s925+5th+St%2C+Ocean+City%2C+NJ+08226!5e0!3m2!1sen!2sus!4v1555284459330!5m2!1sen!2sus" 
                width="100%" 
                height="450" 
                frameBorder="0"  
                allowFullScreen
            ></iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>

        </div>
    );
};

export default Location;