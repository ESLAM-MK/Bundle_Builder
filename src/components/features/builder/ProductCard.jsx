import React from 'react';
import Badge from '../../Ui/Badge';

const ProductCard = () => {
    return (
        <div className=" bg-[#FFFFFF] border-2 border-transparent hover:border-[#4E2FD2B2] cursor-pointer rounded-[10px] p-[11px] flex flex-col justify-between ">
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[19px]">

                <div className="relative flex flex-row items-center justify-center w-[101px] h-[137px] mx-auto lg:mx-0 shrink-0">
                    <img
                        src="/images/Wyze Cam v4.png"
                        alt="product"
                        className="w-full h-full object-contain rounded-[5px]"
                    />
                    <Badge />
                </div>
                <div className="flex flex-col gap-[8px] items-center sm:items-start w-full">
                    <h3 className="font-['Gilroy-SemiBold'] font-[400] text-[18px] lg:text-[16px] leading-[100%] tracking-[0.6px] text-[#1F1F1F]">
                        Wyze Cam v4
                    </h3>

                    <p className="font-['Gilroy-Medium'] font-[400] text-[#1F1F1FBF] text-[14px] lg:text-[12px] leading-[130%] tracking-[0.6px] text-center sm:text-left">
                        The clearest Wyze Cam ever made.{" "}
                        <span className="font-['Gilroy-Medium'] text-[#0000EE] text-[14px] lg:text-[12px] underline cursor-pointer">
                            Learn More
                        </span>
                    </p>
                    <div className="flex flex-row gap-[6px] flex-wrap justify-center sm:justify-start">
                        <button className="flex flex-row justify-center items-center leading-[100%] tracking-[0.6px] w-[65px] h-[26px] rounded-[2px] bg-[#1DF0BB0A] border-[0.5px] border-[#0AA288] py-[1px] px-[3px] font-[400] text-[10px]">
                            <img src="sss" alt="" />
                            White
                        </button>
                        <button className="flex flex-row justify-center items-center border-[0.5px] border-[#CCCCCC] leading-[100%] tracking-[0.6px] w-[65px] h-[26px] rounded-[2px] bg-[#FFFFFF] py-[1px] px-[5px] font-[400] text-[10px]">
                            <img src="sss" alt="" />
                            Gray
                        </button>
                        <button className="flex flex-row justify-center items-center border-[0.5px] border-[#CCCCCC] leading-[100%] tracking-[0.6px] w-[65px] h-[26px] rounded-[2px] bg-[#FFFFFF] py-[1px] px-[5px] font-[400] text-[10px]">
                            <img src="sss" alt="" />
                            Black
                        </button>
                    </div>

                    {/* الـ Counter والأسعار */}
                    <div className="flex flex-row justify-between w-full items-center gap-[10px] pt-2">
                        <div className="flex items-center justify-center gap-[10px] py-[4px] rounded-[4px] w-[80px] select-none">
                            <button className="border-[2px] border-[#E6EBF0] h-[20px] w-[20px] text-[16px] font-bold text-center cursor-pointer bg-[#FFFFFF] text-xs leading-none rounded-[4px] flex items-center justify-center pb-[2px]">
                                -
                            </button>
                            <span className="font-['Gilroy-Medium'] font-[400] text-[16px] leading-[20px] text-[#0B0D10] cursor-default flex items-center justify-center">
                                1
                            </span>
                            <button className="h-[20px] w-[20px] text-center cursor-pointer bg-[#F0F4F7] text-[16px] font-bold leading-none rounded-[4px] select-none flex items-center justify-center pb-[1px]">
                                +
                            </button>
                        </div>

                        <div className="flex flex-row lg:flex-col items-center lg:items-end gap-[6px] lg:gap-[3px]">
                            <span className="text-[16px] font-[400] text-right line-through text-[#D8392B] font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px]">
                                $35.98
                            </span>
                            <span className="text-[16px] font-[400] text-right font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px] text-[#575757]">
                                $27.98
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductCard;