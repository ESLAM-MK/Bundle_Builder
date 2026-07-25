import React from 'react';
import ProductCard from './ProductCard';

const AccordionStep = ({ stepNumber, totalSteps, title, isOpen, selectedCount }) => {
    return (
        <div className={`w-full  ${isOpen && "rounded-[10px]"}  overflow-hidden transition-all`}>
            <div className={` ${isOpen ? " bg-[#EDF4FF]" : "bg-white"}  w-full`}><span className="text-[10px] font-[400] font-['Gilroy-Medium'] align-middle text-[#484848] uppercase tracking-[1.6px] leading-[100%] px-[15px] pt-[15px] pb-[5px]">
                STEP {stepNumber} OF {totalSteps}
            </span>
            </div>
            <div
                className={`py-[20px] px-[15px] flex items-center justify-between border-t-[0.5px] border-[#1F1F1F] ${isOpen ? " bg-[#EDF4FF] " : "bg-white border-b-[0.5px]  border-[#1F1F1F]"} hover:bg-gray-50 transition-all w-full`} >

                <div className="flex items-center gap-[8px]">
                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_68_9780)">
                            <path d="M8.6665 24.9166V20.5833" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M17.3335 24.9166V20.5833" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M22.75 24.9167L3.25 24.9167" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M13 5.14581C15.2436 5.14581 17.0625 6.96473 17.0625 9.20831C17.0625 11.4519 15.2436 13.2708 13 13.2708C10.7564 13.2708 8.9375 11.4519 8.9375 9.20831C8.9375 6.96473 10.7564 5.14581 13 5.14581Z" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M12.9731 16.25C12.7489 16.25 12.5669 16.432 12.5669 16.6562C12.5669 16.8805 12.7489 17.0625 12.9731 17.0625C13.1974 17.0625 13.3794 16.8805 13.3794 16.6562C13.3794 16.432 13.1974 16.25 12.9731 16.25Z" fill="#6F7882" stroke="#6F7882" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <rect x="3.1875" y="0.75" width="19.625" height="19.625" rx="3.25" stroke="#6F7882" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_68_9780">
                                <rect width="26" height="26" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className="text-[22px]  font-[400] text-[#0B0D10]">{title}</h2>
                </div>

                <button type='button' className='cursor-pointer'>
                    <div className="flex items-center gap-[4px]">
                        {selectedCount > 0 && (
                            <span className="text-xs font-semibold text-indigo-600">
                                {selectedCount} selected
                            </span>
                        )}
                        <span className="text-indigo-600 text-xs">
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
                        <div className="w-full  md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                            <ProductCard />
                        </div>
                        <div className=" w-full  md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                            <ProductCard />
                        </div>
                        <div className=" w-full  md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                            <ProductCard />
                        </div>
                        <div className="w-full  md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                            <ProductCard />
                        </div>
                        <div className=" w-full  md:w-[calc(20%-13px)]  lg:w-[calc(50%-7.5px)] ">
                            <ProductCard />
                        </div>

                    </div>

                    <div className="w-full flex justify-center pt-6">
                        <button
                            type="button"
                            className="px-[24px] py-[5px] h-[39px] bg-transparent font-[400] font-['Gilroy-SemiBold'] border-[#4E2FD2] text-[#4E2FD2] border-[1px] rounded-[7px] leading-[24px] text-[18px]"
                        >
                            Next: Choose your plan
                        </button>
                    </div>
                </div>
            )}

        </div>

    );
};

export default AccordionStep;