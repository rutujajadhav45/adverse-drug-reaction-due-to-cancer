import React from 'react';
import { BiBookOpen } from 'react-icons/bi';
import { FiMessageCircle, FiBell } from 'react-icons/fi';

// TODO: CHECK THE WHOLE COMPONENT AGAIN
const GetInvolved = () => {
  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          Get Involved
        </h2>
        <p className="text-xl text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          Explore our resources on chemotherapy medications and side effects, participate in community discussions, and stay updated with the latest insights in oncology care.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-blue-100 text-blue-600 rounded-full mb-4 mx-auto">
              <BiBookOpen size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Explore Resources</h3>
            <p className="text-gray-600 text-center">
              Access comprehensive information on chemotherapy medications and manage side effects effectively.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4 mx-auto">
              <FiMessageCircle size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Join Discussions</h3>
            <p className="text-gray-600 text-center">
              Engage with a supportive community to share experiences and gain valuable insights from others.
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-xl">
            <div className="flex items-center justify-center w-16 h-16 bg-purple-100 text-purple-600 rounded-full mb-4 mx-auto">
              <FiBell size={32} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 text-center mb-2">Stay Updated</h3>
            <p className="text-gray-600 text-center">
              Receive the latest news and breakthroughs in oncology care to stay informed and empowered.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="#" className="inline-block bg-blue-700 text-white font-semibold px-6 py-3 rounded-md hover:bg-blue-800 transition duration-300 ease-in-out transform hover:-translate-y-1">
            Join Our Community
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInvolved;