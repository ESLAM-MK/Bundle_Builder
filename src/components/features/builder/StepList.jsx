import React from 'react';
import AccordionStep from './AccordionStep';
import { useSelector } from 'react-redux';
import StepIcon from '../../Ui/StepIcon';
import fetchFun from '../../../utils/fetchFun.js';
import { useQuery } from '@tanstack/react-query';
const fetchSteps =async()=>{
  return await fetchFun('http://localhost:3000/steps')
}
const StepList = () => {
  const openSteps = useSelector((state)=>state.bundle.openSteps)
  const {data: steps ,isLoading,isError ,error}=useQuery({
    queryKey:['steps'],
    queryFn:fetchSteps
  })
  if (isLoading) return <div>Loading...</div>
  if (isError) return <div>Error: {error.message}</div>
  return (
    <div className="w-full flex flex-col ">
      {steps.map((step) => (
        <AccordionStep
          key={step.stepNo}
          stepNumber={step.stepNo}
          title={step.title}
          nextTitle={step.nextTitle}
          isOpen={openSteps.includes(step.stepNo)}
          logo={<StepIcon iconName={step.logo} ></StepIcon>}
          selectedCount={2}
          totalSteps={steps.length}
          products={step.products}
        />))}
    </div>
  );
};

export default StepList;