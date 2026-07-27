import React, { useState, memo, useCallback } from 'react';
import Badge from '../../Ui/Badge';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveVariants, updateQuantity } from '../../../store/slices/bundleSlice';
import { calculatePrice } from '../../../utils/priceCalc';
import { v4 as uuidv4 } from "uuid" // to make unique id for each element
import PriceTag from '../../Ui/PriceTag';

const ProductCard = ({ product }) => {
    const { activeVariants, selectors, categories } = useSelector(state => state.bundle)
    const activeVariant = activeVariants[product.id] ? activeVariants[product.id] : product
    const index = selectors.findIndex((s) => {
        if (product.hasVariants) {
            return s.variant?.id === activeVariant?.id
        }
        return s.product?.id === product.id
    })
    const quantity = index !== -1 ? selectors[index].quantity : 0
    const dispatch = useDispatch()
    const changeQuantity = (product, actionType) => {
        dispatch(updateQuantity({ product, actionType }))
    }
    const handleVariant = (product, variant) => {
        dispatch(setActiveVariants({ product, variant }))
    }
    const isSelected = categories[product.category]?.includes(product.id) ? true : false
    return (
        <div className={` relative h-full bg-[#FFFFFF]  hover:shadow-2xl transition-all duration-100 ${isSelected && "border-2 border-[#4E2FD2B2]"} rounded-[10px] p-[11px] flex flex-col justify-evenly `}>
            {/* {console.log(activeVariant)}
            {console.log(selectors)} */}
            {product.discountPercentage && <Badge key={uuidv4()} discountPercentage={product.discountPercentage} />}
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[19px]">

                <div className=" flex flex-row items-center justify-center w-[101px] h-[137px] mx-auto lg:mx-0 shrink-0">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded-[5px]"
                    />
                </div>
                <div className="flex flex-col gap-[8px] items-center justify-center sm:items-start w-full">
                    <h3 className="font-['Gilroy-SemiBold'] font-[400] text-[16px] lg:text-[18px] leading-[100%] tracking-[0.6px] text-[#1F1F1F]">
                        {product.title}
                    </h3>

                    <p className="font-['Gilroy-Medium'] font-[400] text-[#1F1F1FBF] text-[12px] lg:text-[14px] leading-[130%] tracking-[0.6px] text-center sm:text-left line-clamp-3">
                        {product.description}{" "}
                    </p>
                    <span className="font-['Gilroy-Medium'] text-[#0000EE] text-[14px] lg:text-[12px] underline cursor-pointer">
                        Learn More
                    </span>
                    {product.hasVariants && <div className="flex flex-row gap-[6px] flex-wrap justify-center sm:justify-start">
                        {product.variants.map(v => <button onClick={() => handleVariant(product, v)}
                            key={uuidv4()} className={`cursor-pointer flex flex-row justify-center items-center leading-[100%] tracking-[0.6px] w-[65px] h-[26px] rounded-[2px] ${activeVariant?.id === v?.id ? 'border-[0.5px] border-[#0AA288] bg-[#1DF0BB0A]' : 'bg-[#FFFFFF] border-[0.5px] border-[#CCCCCC]'}  py-[1px] px-[3px] font-[400] text-[10px]`}>
                            <img src={v.image} alt={v.lable} className='w-[22px] h-[22px]' ></img>
                            {v.color}
                        </button>)}
                    </div>
                    }
                    <div className="flex flex-row md:flex-col lg:flex-row justify-center w-full items-center gap-[10px] pt-2">
                        <div className="flex items-center justify-center md:justify-evenly lg:justify-start gap-[10px] py-[4px] rounded-[4px] w-full flex-1 select-none">
                            <button onClick={() => changeQuantity(product, "decrement")} className={`${quantity === 0 ? "shadow-lg border-[2px] border-[#E6EBF0] bg-[#FFFFFF]" : "bg-[#F0F4F7]"}  h-[20px] w-[20px] text-[16px] font-bold text-center cursor-pointer  text-xs leading-none rounded-[4px] flex items-center justify-center pb-[2px] `}>
                                -
                            </button>
                            <span className="font-['Gilroy-Medium'] font-[400] text-[16px] leading-[20px] text-[#0B0D10] cursor-default flex items-center justify-center">
                                {quantity}
                            </span>
                            <button onClick={() => changeQuantity(product, "increment")} className="shadow-lg h-[20px] w-[20px] text-center cursor-pointer bg-[#F0F4F7] text-[16px] font-bold leading-none rounded-[4px] select-none flex items-center justify-center pb-[1px]">
                                +
                            </button>
                        </div>
                        <div className={`flex flex-row lg:flex-col items-center md:p-r-[5px]  justify-center lg:items-end gap-[6px] lg:gap-[3px]  flex-1`}>
                            <PriceTag compareAtPrice={product.compareAtPrice} discountPercentage={product.discountPercentage} color1='text-[#D8392B]' color2='text-[#575757]' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;