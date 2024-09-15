import React from "react";
import { MdGroup, MdBusiness, MdHistoryEdu  } from "react-icons/md";

const About = () => {
	
  const features = [
    {
      icon: <MdGroup size={24} />,
      title: "Our Team",
      description:
        "A dedicated group of professionals committed to excellence. Our team brings together experts in Oncology, Pharmacology, and Patient care, dedicated to providing credible and compassionate support to our community. We are committed to ensuring our content is up-to-date, informative, and sensitive to the needs of those undergoing Chemotherapy treatment.",
    },
    {
      icon: <MdBusiness size={24} />,
      title: "Our Mission",
      description: "At Adverse Drug Reaction Due to Chemotherapy, our mission is to empower patients, caregivers, and healthcare professionals with reliable information about the adverse drug reactions associated with Chemotherapy treatments. We aim to enhance understanding and improve patient outcomes through comprehensive education and support.",
    },
    {
      icon: <MdHistoryEdu size={24} />,
      title: "Our Story",
      description:
        "Founded in 20XX, Adverse Drug Reaction Due to Chemotherapy was created to address the critical need for accessible and accurate information on Chemotherapy side effects. Our team of healthcare professionals and patient advocates saw firsthand the challenges patients face in managing these reactions and set out to create a centralized hub of knowledge.",
    },
  ];

  return (
    <div className=" py-16 px-4 sm:px-6 lg:px-8 " id="about">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8">
          About Us
        </h2>
        <p className="mt-4 text-xl text-gray-500 text-center max-w-3xl mx-auto">
          Welcome to Adverse Drug Reaction Due to Chemotherapy, your trusted
          resource for understanding and managing Chemotherapy side effects.
          We're a passionate team dedicated to delivering high-quality
          resource. Our expertise and commitment drive us to innovate and excel
          in everything we do.
        </p>
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-blue-700 rounded-md shadow-lg">
                        {React.cloneElement(feature.icon, {
                          className: "text-white",
                        })}
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">
                      {feature.title}
                    </h3>
                    <p className="mt-5 text-base text-gray-500">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-16 text-center" id="work"> 
          {/* FIXME: at the end of about component I entered id="work" */}
          <a href="/RESULTS.pdf" target="_blank" className="bg-blue-700 text-white font-bold py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
            Learn More
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
