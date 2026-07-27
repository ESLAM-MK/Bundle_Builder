import React from 'react';
import { calculatePrice } from '../../utils/priceCalc';

const PriceTag = ({ compareAtPrice, discountPercentage, color1 , color2 , quantity = 1 }) => {
    const isFree = discountPercentage >= 100;
    const originalPrice = (compareAtPrice * quantity).toFixed(2);
    const currentPrice = (calculatePrice(compareAtPrice, discountPercentage) * quantity).toFixed(2);

    return (
        <>
            {discountPercentage && (
                <span className={`text-[16px] font-[400] text-right line-through ${color1} font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px]`}>
                    ${originalPrice}
                </span>
            )}
            <span className={`text-[16px] font-[400] text-right font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px] ${color2}`}>
                {isFree ? 'FREE' : `$${currentPrice}`}
            </span>
        </>
    )
}

export default PriceTag;