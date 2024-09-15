import React from 'react';

const Contact = () => {
  return (
    <div className="flex items-center justify-center bg-blue-700 p-4 sm:p-14" id="contact">
      <div className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full">
        <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">Contact Us</h1>
        <p className='text-gray-600'>
        For questions, feedback, or collaboration opportunities, please reach out to us. We welcome your input as we strive to improve our resources and support for our community.
        <br />
        </p>
        <p className="text-gray-800 font-semibold my-3">
              Email: <a href="mailto:rutuja.jadhavv45@gmail.com" className="text-blue-600 hover:underline">
                rutuja.jadhavv45@gmail.com</a>
            </p>
        <form>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border border-black rounded-md p-1" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-black rounded-md p-1" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea id="message" name="message" rows="4" className="mt-1 block w-full border border-black rounded-md p-1"></textarea>
          </div>
          <div className='mt-4'>
            <a href="/" className="w-full mx-auto bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
              Send Message
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
