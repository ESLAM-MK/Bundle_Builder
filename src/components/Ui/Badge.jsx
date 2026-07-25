import React from 'react';

const Badge = ({discountPercentage}) => {
    return (
            <div className="absolute top-0 left-0 bg-[#4E2FD2] font-[400] text-[#FFFFFF] text-[12px]  px-[6px] py-[2px] gap-[10px] rounded-[10px]">
                        Save {discountPercentage}%
                    </div>
    );
}

export default Badge;
