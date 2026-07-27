import React, { memo } from 'react';
import ProductCard from './ProductCard';
import { useDispatch, useSelector } from 'react-redux';
import { nextStep, toggleStep } from '../../../store/slices/bundleSlice';
import { v4 as uuidv4 } from "uuid" // to make unique id for each element

const AccordionStep = memo(({ stepNumber, nextTitle, title, isOpen, selectedCount, logo, totalSteps, products }) => {
    const dispatch = useDispatch()
    const openSteps = useSelector((state) => state.bundle.openSteps)
    const toggleClick = (stepNumber) => {
        dispatch(toggleStep(stepNumber))
    }
    const goToNext = (stepNumber) => {
        dispatch(nextStep(stepNumber))
    }
    return (
        <div className={`w-full  ${isOpen && "rounded-[10px]"}  overflow-hidden transition-all`}>
            <div className={` ${isOpen ? " bg-[#EDF4FF]" : "bg-white"}  w-full`}><span className="text-[10px] font-[400] font-['Gilroy-Medium'] align-middle text-[#484848] uppercase tracking-[1.6px] leading-[100%] px-[15px] pt-[15px] pb-[5px]">
                STEP {stepNumber} OF {totalSteps}
            </span>
            </div>
            <div
                className={`py-[20px] px-[15px] flex items-center justify-between border-t-[0.5px] border-[#1F1F1F] ${isOpen ? " bg-[#EDF4FF] " : "bg-white border-b-[0.5px]  border-[#1F1F1F]"} hover:bg-gray-50 transition-all w-full`} >

                <div className="flex items-center gap-[8px]">
                    {logo}

                    <h2 className="text-[22px]  font-[400] text-[#0B0D10]">{title}</h2>
                </div>

                <button type='button' className='cursor-pointer' onClick={() => toggleClick(stepNumber)}>
                    <div className="flex items-center gap-[4px]">
                        {selectedCount && (
                            <span className="text-xs font-semibold text-[#4E2FD2]">
                                {selectedCount} selected
                            </span>
                        )}
                        <span className="text-[#4E2FD2] text-xs">
                            {isOpen ? <svg className='inline' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.59318 2.56961C5.79259 2.29044 6.2075 2.29044 6.40691 2.56962L10.4353 8.20938C10.6717 8.54032 10.4351 9 10.0284 9H1.9716C1.56491 9 1.32835 8.54031 1.56473 8.20938L5.59318 2.56961Z" fill="#4E2FD2" />
                            </svg>
                                : <svg className='inline' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6.40682 9.43039C6.20741 9.70956 5.7925 9.70956 5.59309 9.43038L1.56472 3.79062C1.32834 3.45968 1.5649 3 1.97159 3L10.0284 3C10.4351 3 10.6716 3.45969 10.4353 3.79062L6.40682 9.43039Z" fill="#4E2FD2" />
                                </svg>
                            }
                        </span>
                    </div>
                </button>
            </div>

            {isOpen && (
                <div className="p-[15px] md:pt-[15px] border-t border-gray-100 bg-[#EDF4FF]">

                    <div className="flex flex-wrap justify-center gap-[15px] w-full">
                        {products.map((product) => (
                            <div key={uuidv4()} className="w-full md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                                <ProductCard product={product} />
                            </div>
                        ))}
                    </div>

                    <div className="w-full flex justify-center pt-6">
                        {nextTitle && <button onClick={() => goToNext(stepNumber)}
                            type="button"
                            className="cursor-pointer px-[24px] py-[5px] h-[39px] hover:shadow-2xl bg-transparent hover:border-white hover:bg-[#4E2FD2] hover:text-[white] font-[400] font-['Gilroy-SemiBold'] border-[#4E2FD2] text-[#4E2FD2] border-[1px] rounded-[7px] leading-[24px] text-[18px] transition-all duration-500"
                        >
                            Next: {nextTitle}
                        </button>}
                    </div>
                </div>
            )}

        </div>

    );
});

export default AccordionStep;