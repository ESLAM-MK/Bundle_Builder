import React from 'react';
import { calculatePrice } from '../../../utils/priceCalc';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity } from '../../../store/slices/bundleSlice';
import PriceTag from '../../Ui/PriceTag';

const ReviewItem = ({ selected }) => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => state.bundle.selectors)
    const changeQuantity = (product, actionType) => { // change value of quantity 
        dispatch(updateQuantity({ product, actionType }))
    }
    return (
        <div className="flex flex-row justify-between items-center w-full gap-[12px]">
            <div className="flex flex-row items-center justify-start gap-[12px] min-w-0 flex-1">
                <div className="w-[41px] h-[41px] bg-white shrink-0 rounded-[5px] overflow-hidden flex items-center justify-center">
                    <img src={selected.variant.image} alt={`${selected.product.title} ${selected.variant.color}`} className="w-[41px] h-[41px] rounded-[5px] object-cover" />
                </div>
                <h3 className="font-['Gilroy-Medium'] font-[400] text-[14px] leading-[18px] text-[#0B0D10] break-words">
                    {`${selected.product.title} ${selected.variant?.color ? selected.variant.color : ""}`}
                </h3>
            </div>
            <div className="flex flex-row justify-end items-center  gap-[16px] shrink-0">
                <div className="flex items-center justify-center gap-[10px] py-[4px] rounded-[4px] w-[80px] select-none ">
                    <button onClick={() => changeQuantity(selected.product, "decrement")} className={`${selected.quantity === 0 ? "border-[2px] border-[#E6EBF0] bg-[#FFFFFF]" : "bg-[#F0F4F7]"}  h-[20px] w-[20px] text-[16px] font-bold text-center cursor-pointer  text-xs leading-none rounded-[4px] flex items-center justify-center pb-[2px] shadow-lg`}>
                        -
                    </button>
                    <span className="font-['Gilroy-Medium'] font-[400] text-[16px] leading-[20px] text-[#0B0D10] cursor-default flex items-center justify-center">
                        {selected.quantity}
                    </span>
                    <button onClick={() => changeQuantity(selected.product, "increment")} className="shadow-lg h-[20px] w-[20px] text-center cursor-pointer bg-[#F0F4F7] text-[16px] font-bold leading-none rounded-[4px] select-none flex items-center justify-center pb-[1px]">
                        +
                    </button>
                </div>

                <div className="flex flex-col items-end justify-center">
                    <PriceTag compareAtPrice={selected.product.compareAtPrice} discountPercentage={selected.product.discountPercentage} quantity={selected.quantity} color2='text-[#4E2FD2]' color1='text-[#6F7882]' />
                </div>
            </div>
        </div>
    )
}

export default ReviewItem;
