import React from "react";
import SubWork from "./SubWork";



const Work = () => {
  const workDoneData={
	0:"Chemotherapeutic agents, vital tools in the fight against cancer, often come with a significant drawback: their propensity to induce adverse drug reactions (ADRs). These reactions stem from their inherent toxicity to rapidly dividing cells throughout the body. However, timely detection of these ADRs holds immense potential for mitigating their impact. By promptly identifying such reactions, healthcare providers can tailor treatment regimens, either by adjusting dosages or substituting the offending agent altogether. Moreover, this knowledge serves as a foundation for preventing similar reactions in future treatment cycles.",
	
	1:"The establishment of a robust ADR monitoring and reporting system within healthcare facilities is imperative. Such a system not only facilitates early detection but also fosters a culture of vigilance among healthcare professionals. Through heightened awareness of ADRs and their significance, medical staff can proactively intervene to minimize patient harm. It is noteworthy that a considerable proportion of ADRs observed in hospitalized oncology patients are predictable and potentially preventable. Therefore, the implementation of rational and judicious preventive measures holds promise in curbing the incidence and severity of ADRs. ",
	
	2:"This proactive approach not only alleviates human suffering but also alleviates the economic burden on patients and society at large. By prioritizing patient safety and optimizing treatment outcomes, healthcare systems can truly enhance the quality of care delivered to oncology patients."

  }

  return (
    <div className="mx-auto bg-white p-6">
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center mb-8 ">
        Our Work
      </h2>

      <SubWork 
	  	workImageLink="/assets/man-woman-working.avif"
		workDoneData={workDoneData[0]}
		/>

      <SubWork
		workDoneData={workDoneData[1]}
		workImageLink="/assets/woman-working.avif"
		width={500}
		reverseDirection={"sm:flex-row-reverse"}  
		justifyCenter={"justify-center"} 
	  />

      <SubWork 
	  workDoneData={workDoneData[2]}
	  workImageLink="/assets/man-working.avif"
	  />
    </div>
  );
};

export default Work;
