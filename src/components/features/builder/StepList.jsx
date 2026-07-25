import React from 'react';
import AccordionStep from './AccordionStep';

const StepList = () => {
  return (
    <div className="w-full flex flex-col ">
      <AccordionStep
        stepNumber={1}
        totalSteps={4}
        title="Choose your cameras"
        isOpen={true}
        selectedCount={2}
      />
        
      <AccordionStep
        stepNumber={2}
        totalSteps={4}
        title="Choose your plan"
        isOpen={false}
        selectedCount={1}
      />

      <AccordionStep
        stepNumber={3}
        totalSteps={4}
        title="Choose your sensors"
        isOpen={false}
        selectedCount={2}
      />

      <AccordionStep
        stepNumber={4}
        totalSteps={4}
        title="Add extra protection"
        isOpen={false}
        selectedCount={1}
      />
    </div>
  );
};

export default StepList;