import React from 'react';
import Bounce from 'react-reveal/Bounce';


const ContactForm = () => {
    return (
        <form className="p-6 flex flex-col justify-center w-full lg:w-2/4 mx-auto" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col space-y-6">
                <Bounce left>
                    <textarea
                        type="text"
                        placeholder="John Doe"
                    />
                    <textarea
                        type="email"
                        placeholder="john.doe@example.com"
                    />
                    <textarea
                        type="number"
                        placeholder="123-456-7890"
                    />
                </Bounce>
            </div>

            {/* text field */}
            <Bounce left>
                <div className="mt-6">
                    <textarea placeholder="Your message here..." className="w-full px-4 py-3 h-36 rounded-lg ring-blue-200 focus:ring-4 focus:outline-none transition duration-300 border border-gray-300 resize-none"></textarea>
                </div>
                <button className="w-full py-3 mt-6 poppins btn-primary" >Submit</button>
            </Bounce>
        </form>
    );
}

export default ContactForm;
