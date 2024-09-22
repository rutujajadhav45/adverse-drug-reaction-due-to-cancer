import React from 'react'

const SubWork = ({reverseDirection, workDoneData, workImageLink, width, justifyCenter}) => {
	return (
		<div className={`sm:flex p-8 ${reverseDirection}`}>
		  <div className={`sm:w-1/2 flex items-center ${justifyCenter} `}>
			<img src={workImageLink} alt="our work" width={width} className='rounded-lg'/>
		  </div>
	
		  <div className="sm:w-1/2 flex items-center sm:p-0 p-4">
			<p className="text-gray-700">
			  {workDoneData}
			</p>
		  </div>
		</div>
	  );
}

export default SubWork;