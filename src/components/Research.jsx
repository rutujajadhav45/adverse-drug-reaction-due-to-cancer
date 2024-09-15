import React, { useState } from 'react';

const Research = () => {
  const [activeTab, setActiveTab] = useState('plan');

  const planOfWork = [
    "Obtain approval from the institutional ethics committee of Bharati hospital and research center Pune, to conduct an observational study to identify and assess platinum induced adverse drug reactions.",
    "A thorough medication chart review of the patient will be conducted.",
    "To monitor the patient for incidence of ADR by through systematic medication chart review, patient interaction and review of laboratory investigation reports on daily basis.",
    "The demography, personal, family, disease and drugs history would be collected of such patients with any suspected ADR in the systematically designed patient profile form.",
    "Classify the suspected ADR for its type by using expanded Rawlins and Thompson's classification.",
    "Assessment of the causality of ADR using WHO Causality assessment scale.",
    "Evaluation of the Severity of ADR using modified Hartwig's Scale.",
    "Evaluation of ototoxicity using Chang's scale.",
    "Evaluate the outcome and seriousness of ADR and its management."
  ];

  const materialsAndMethods = [
    {
      title: "Study Design and Data Collection",
      content: "This retrospective, descriptive, case record study was conducted on patients admitted to the Medical Oncology ward of a tertiary care hospital, following the approval of the Institutional Ethics Committee. The study aimed to analyze adverse drug reactions (ADRs) in patients receiving chemotherapy. Over a three-month period, from April 1, 2024, to June 31, 2024, a total of 112 patients received chemotherapy. Out of these, 100 serial cases developing ADRs were included in this study, as the focus was on analyzing 112 ADRs."
    },
    {
      title: "Inclusion Criteria",
      content: "Patients of both sexes and all ages diagnosed with cancer and treated with chemotherapy were included in the study if they developed at least one ADR during or after the treatment period."
    },
    {
      title: "Recorded Data",
      content: "Demographic Details, Medication Details, ADRs Details, and Laboratory Investigations were carefully documented."
    },
    {
      title: "Assessment Tools",
      content: "WHO Causality Assessment Scale and Modified Hartwig and Siegel Scale were used to assess causality and severity of ADRs respectively."
    },
    {
      title: "Analysis",
      content: "The collected data were analyzed using SPSS software version 17.0, developed by IBM. Frequencies were determined for each variable to provide a comprehensive understanding of the distribution and characteristics of the ADRs observed in the study population."
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden">
	  <h2 className='text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8'>Project Plan</h2>
        <div className="flex border-b">
          <button
            className={`flex-1 py-4 px-6 text-lg font-semibold ${
              activeTab === 'plan' 
              ? 'bg-blue-700 text-white ' 
              : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('plan')}
          >
            Plan of Work
          </button>
          <button
            className={`flex-1 py-4 px-6 text-lg font-semibold ${
              activeTab === 'materials' 
              ? 'bg-blue-700 text-white' 
              : 'bg-gray-200 text-gray-700'
            }`}
            onClick={() => setActiveTab('materials')}
          >
            Materials and Methods
          </button>
        </div>
        
        <div className="p-6">
          {activeTab === 'plan' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[rgb(29,78,216)]">Plan of Work</h2>
              <ol className="list-decimal list-inside space-y-3">
                {planOfWork.map((step, index) => (
                  <li key={index} className="text-gray-800">{step}</li>
                ))}
              </ol>
            </div>
          )}
          
          {activeTab === 'materials' && (
            <div>
              <h2 className="text-2xl font-bold mb-4 text-[rgb(29,78,216)]">Materials and Methods</h2>
              {materialsAndMethods.map((section, index) => (
                <div key={index} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2 text-[rgb(29,78,216)]">{section.title}</h3>
                  <p className="text-gray-800">{section.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Research;