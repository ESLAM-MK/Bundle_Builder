import React from 'react';
import AccordionStep from './AccordionStep';
import { useSelector } from 'react-redux';
import StepIcon from '../../Ui/StepIcon';
import fetchFun from '../../../utils/fetchFun.js';
import { useQuery } from '@tanstack/react-query';
import {steps} from "../../../data/items.json"
import { v4 as uuidv4 } from "uuid"
// const fetchSteps = async () => {
//   return await fetchFun('http://localhost:3000/steps')
// }
const StepList = () => {
  const openSteps = useSelector((state) => state.bundle.openSteps)
  const categories = useSelector(state => state.bundle.categories)
//   const { data: steps, isLoading, isError, error } = useQuery({
//     queryKey: ['steps'],
//     queryFn: fetchSteps
//   })// fetching data from server using tanstack query 
//   if (isLoading) return <div>Loading...</div> // for loading
//   if (isError) return <div>Error: {error.message}</div> // appears in error
  return (
    <div className="w-full flex flex-col ">
      {steps.map((step) => {
        const count = categories[step.category]?.length // get count of selected products
        return (
          <AccordionStep
            key={uuidv4()}
            stepNumber={step.stepNo}
            title={step.title}
            nextTitle={step.nextTitle}
            isOpen={openSteps.includes(step.stepNo)}
            logo={<StepIcon iconName={step.logo} ></StepIcon>}
            selectedCount={count > 0 ? count : null}
            totalSteps={steps.length}
            products={step.products}
          />)
      })}
    </div>
  );
};

export default StepList;