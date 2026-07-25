import React, { useState } from 'react';
import Badge from '../../Ui/Badge';

const ProductCard = ({ product }) => {
    const [quantity, setQuantity] = useState(0)
    const [variant, setVariant] = useState(null)
    const [selected, setSelected] = useState([])
    const changeQuantity = (product,state) => {
        let currentVariant = variant
        if (!currentVariant && product.hasVariants) {
            currentVariant = product.variants[0]
            setVariant(currentVariant)
        }
        let newQuantity
        if(state ==="increment"){
         newQuantity= quantity + 1
        }else{
            if(quantity>0){
        newQuantity = quantity - 1
            }else{
                 newQuantity = quantity
            }
        }
        setQuantity(newQuantity)
        const index = selected.findIndex((s) => s.variant?.title === currentVariant?.title)
        if (index === -1) {
            setSelected([...selected, { variant: currentVariant, quantity: newQuantity }])
        } else {
            let updated = [...selected]
            updated[index] = { ...updated[index], variant: currentVariant, quantity: newQuantity }
            setSelected(updated)
        }

    }
    const handleVariant = (v) => {
        const index = selected.findIndex((s) => s.variant?.title ===  v?.title)
        setVariant(v)
        if (index === -1) {
            setQuantity(0)
        } else {
            setQuantity(selected[index].quantity)
        }
    }
    return (
        <div className={` bg-[#FFFFFF]   ${"border-2 border-[#4E2FD2B2]"} rounded-[10px] p-[11px] flex flex-col justify-between `}>
            {console.log(variant)}
            {console.log(selected)}
            <div className="flex flex-col items-center lg:items-start lg:flex-row lg:gap-[19px]">

                <div className="relative flex flex-row items-center justify-center w-[101px] h-[137px] mx-auto lg:mx-0 shrink-0">
                    <img
                        src={product.image}
                        alt={product.title}
                        className="w-full h-full object-contain rounded-[5px]"
                    />
                    {product.discountPercentage && <Badge discountPercentage={product.discountPercentage} />}
                </div>
                <div className="flex flex-col gap-[8px] items-center sm:items-start w-full">
                    <h3 className="font-['Gilroy-SemiBold'] font-[400] text-[18px] lg:text-[16px] leading-[100%] tracking-[0.6px] text-[#1F1F1F]">
                        {product.title}
                    </h3>

                    <p className="font-['Gilroy-Medium'] font-[400] text-[#1F1F1FBF] text-[14px] lg:text-[12px] leading-[130%] tracking-[0.6px] text-center sm:text-left">
                        {product.description}{" "}
                        <span className="font-['Gilroy-Medium'] text-[#0000EE] text-[14px] lg:text-[12px] underline cursor-pointer">
                            Learn More
                        </span>
                    </p>
                    {product.hasVariants && <div className="flex flex-row gap-[6px] flex-wrap justify-center sm:justify-start">
                        {product.variants.map(v => <button onClick={() => handleVariant(v)}
                            key={v.id} className={`cursor-pointer flex flex-row justify-center items-center leading-[100%] tracking-[0.6px] w-[65px] h-[26px] rounded-[2px] ${variant === v ? 'border-[0.5px] border-[#0AA288] bg-[#1DF0BB0A]' : 'bg-[#FFFFFF] border-[0.5px] border-[#CCCCCC]'}  py-[1px] px-[3px] font-[400] text-[10px]`}>
                            <img src={v.image} alt={v.lable} className='w-[22px] h-[22px]' ></img>
                            {v.color}
                        </button>)}
                    </div>
                    }
                    <div className="flex flex-row justify-between w-full items-center gap-[10px] pt-2">
                        <div className="flex items-center justify-center gap-[10px] py-[4px] rounded-[4px] w-[80px] select-none">
                            <button onClick={() => changeQuantity(product , "decreament")} className={`${quantity===0?"border-[2px] border-[#E6EBF0] bg-[#FFFFFF]" :"bg-[#F0F4F7]"}  h-[20px] w-[20px] text-[16px] font-bold text-center cursor-pointer  text-xs leading-none rounded-[4px] flex items-center justify-center pb-[2px] `}>
                                -
                            </button>
                            <span className="font-['Gilroy-Medium'] font-[400] text-[16px] leading-[20px] text-[#0B0D10] cursor-default flex items-center justify-center">
                                {quantity}
                            </span>
                            <button onClick={() => changeQuantity(product , "increment")} className="h-[20px] w-[20px] text-center cursor-pointer bg-[#F0F4F7] text-[16px] font-bold leading-none rounded-[4px] select-none flex items-center justify-center pb-[1px]">
                                +
                            </button>
                        </div>

                        <div className="flex flex-row lg:flex-col items-center lg:items-end gap-[6px] lg:gap-[3px]">
                            {product.discountPercentage && <span className="text-[16px] font-[400] text-right line-through text-[#D8392B] font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px]">
                                ${product.compareAtPrice}
                            </span>}
                            <span className="text-[16px] font-[400] text-right font-['Gilroy-Regular'] leading-[100%] tracking-[0.6px] text-[#575757]">
                                ${product.discountPercentage ? Math.round((product.compareAtPrice - product.discountPercentage / 100 * product.compareAtPrice) * 100) / 100 : product.compareAtPrice}
                            </span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ProductCard;