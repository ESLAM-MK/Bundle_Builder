import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { beforeDiscountCalc, calculatePrice, TotalPrice } from '../../../utils/priceCalc';
import { saveSystem, updateQuantity } from '../../../store/slices/bundleSlice';
import ReviewItem from './ReviewItem';
import { v4 as uuidv4 } from "uuid" // to make unique id for each element
const ReviewPanel = () => {
    const dispatch = useDispatch()
    const selectors = useSelector(state => state.bundle.selectors)
    const changeQuantity = useCallback((product, actionType) => { // change current quantity
        dispatch(updateQuantity({ product, actionType }))
    }, [dispatch])

    const groupedCategories = useMemo(() => { // useMemo to prevent repeating the measurements without changes selectors
        return selectors.reduce((acc, item) => {
            const category = item.product.category
            if (!acc[category]) acc[category] = []
            acc[category].push(item)
            return acc
        }, {})
    }, [selectors])

    const saveMySystem = () => {
        dispatch(saveSystem())
    }

    return (
        <div className="bg-[#EDF4FF] rounded-[10px]  py-[15px] flex flex-col gap-[5px]">
            <span className="uppercase font-['Gilroy-Medium'] px-[15px] text-[12px] tracking-[1.6px] ">
                review
            </span>
            <div className='flex flex-col md:flex-row lg:flex-col  gap-[10px] p-[20px] mt-[5px]'>
                <div className='flex flex-col gap-[5px] md:w-[50%] lg:w-[100%]'>
                    <h2 className="font-['Gilroy-SemiBold'] font-[400] text-[22px] text-[#1F1F1F] tracking-[0.6px] leading-[100%] align-middle">Your security system</h2>
                    <p className="leading-[130%]  tracking-[0.6px] font-['Gilroy-Medium'] text-[14px] text-[#1F1F1FBF] font-[400]">
                        Review your personalized protection system designed to keep what matters most safe.
                    </p>
                    {Object.entries(groupedCategories).map(([categoryName, items]) => (
                        <div key={uuidv4()} className='border-t-[1px] border-[#CED6DE] flex flex-col gap-[8px]'>
                            <h4 className="mt-[16px] font-['Gilroy-Regular'] text-[#A8B2BD] text-[12px] uppercase leading-[16px] tracking-[3%] font-[400]">{categoryName}</h4>
                            {items.map((s) => <ReviewItem key={uuidv4()} selected={s} />)}
                        </div>))}
                    {selectors.length > 0 && <div className="  border-t-[1px] border-[#CED6DE] flex flex-row justify-between items-center w-full gap-[12px] pt-[15px]">
                        <div className="flex flex-row items-center justify-start gap-[12px] min-w-0 flex-1">
                            <div className="w-[41px] h-[41px] bg-white shrink-0 rounded-[5px] overflow-hidden flex items-center justify-center">
                                <svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width="41" height="41" rx="5" fill="white" />
                                    <path d="M9.625 20.4043H20.5V22.2168H9.625V20.4043ZM7.8125 15.873H16.875V17.6855H7.8125V15.873Z" fill="#0AA288" />
                                    <path d="M33.114 20.9535L30.3953 14.6097C30.3254 14.4468 30.2092 14.3078 30.0612 14.2102C29.9132 14.1126 29.7397 14.0606 29.5624 14.0605H26.8437V12.248C26.8437 12.0077 26.7482 11.7772 26.5782 11.6072C26.4083 11.4373 26.1778 11.3418 25.9374 11.3418H11.4374V13.1543H25.0312V24.5332C24.6185 24.7733 24.2573 25.0925 23.9683 25.4726C23.6793 25.8527 23.4683 26.2862 23.3473 26.748H17.6525C17.4319 25.8938 16.9073 25.1493 16.1771 24.6541C15.4469 24.1589 14.5611 23.947 13.6858 24.0582C12.8105 24.1694 12.0059 24.5959 11.4226 25.258C10.8394 25.92 10.5176 26.772 10.5176 27.6543C10.5176 28.5366 10.8394 29.3886 11.4226 30.0506C12.0059 30.7127 12.8105 31.1392 13.6858 31.2504C14.5611 31.3616 15.4469 31.1497 16.1771 30.6545C16.9073 30.1593 17.4319 29.4148 17.6525 28.5605H23.3473C23.5445 29.3383 23.9953 30.0282 24.6286 30.5209C25.2618 31.0137 26.0413 31.2812 26.8437 31.2812C27.646 31.2812 28.4255 31.0137 29.0587 30.5209C29.692 30.0282 30.1428 29.3383 30.34 28.5605H32.2812C32.5215 28.5605 32.752 28.4651 32.922 28.2951C33.0919 28.1252 33.1874 27.8946 33.1874 27.6543V21.3105C33.1874 21.1878 33.1624 21.0663 33.114 20.9535ZM14.1562 29.4668C13.7977 29.4668 13.4473 29.3605 13.1492 29.1613C12.8511 28.9622 12.6188 28.6791 12.4816 28.3479C12.3444 28.0167 12.3085 27.6523 12.3785 27.3007C12.4484 26.9491 12.621 26.6262 12.8745 26.3727C13.128 26.1192 13.451 25.9466 13.8026 25.8766C14.1541 25.8067 14.5186 25.8426 14.8498 25.9798C15.181 26.117 15.464 26.3493 15.6632 26.6473C15.8624 26.9454 15.9687 27.2958 15.9687 27.6543C15.9687 28.135 15.7777 28.596 15.4378 28.9359C15.0979 29.2758 14.6369 29.4668 14.1562 29.4668ZM26.8437 15.873H28.9643L30.9073 20.4043H26.8437V15.873ZM26.8437 29.4668C26.4852 29.4668 26.1348 29.3605 25.8367 29.1613C25.5386 28.9622 25.3063 28.6791 25.1691 28.3479C25.0319 28.0167 24.996 27.6523 25.066 27.3007C25.1359 26.9491 25.3085 26.6262 25.562 26.3727C25.8155 26.1192 26.1385 25.9466 26.4901 25.8766C26.8416 25.8067 27.2061 25.8426 27.5373 25.9798C27.8685 26.117 28.1515 26.3493 28.3507 26.6473C28.5499 26.9454 28.6562 27.2958 28.6562 27.6543C28.6562 28.135 28.4652 28.596 28.1253 28.9359C27.7854 29.2758 27.3244 29.4668 26.8437 29.4668ZM31.3749 26.748H30.34C30.1403 25.9718 29.6888 25.2837 29.056 24.7917C28.4233 24.2997 27.6452 24.0315 26.8437 24.0293V22.2168H31.3749V26.748Z" fill="#0AA288" />
                                </svg>
                            </div>
                            <h3 className="font-['Gilroy-Medium'] font-[400] text-[14px] leading-[18px] text-[#0B0D10]">
                                Fast Shipping
                            </h3>
                        </div>
                        <div className="flex flex-row justify-end items-center gap-[16px] shrink-0">
                            <div className="flex flex-col items-end justify-center">
                                <span className="text-[14px] font-[400] text-right line-through text-[#6F7882] font-['Gilroy-Medium']  leading-[16px] align-middle tracking-[5%]">$5.99</span>
                                <span className="text-[14px] font-bold leading-[16px] text-center tracking-[0.5%] font-['Gilroy-SemiBold'] text-[#4E2FD2]">
                                    FREE
                                </span>
                            </div>
                        </div>
                    </div>}
                </div>
                <div className='border-t-[1px] border-[#CED6DE] flex flex-col gap-[8px]'>
                </div>
                <div className='flex flex-col gap-[8px] md:w-[50%] lg:w-[100%]'>
                    <div className=' flex flex-col  gap-[8px]'>
                        <div className="flex flex-row md:flex-col lg:flex-row justify-between items-center w-full gap-[12px] pt-[15px]">
                            <div className="flex flex-row items-center justify-between gap-[12px] min-w-0 flex-1">
                                <div className="w-[78px] h-[78px] md:w-[131px] md:h-[131px] lg:w-[78px] lg:h-[78px]  shrink-0  overflow-hidden flex items-center justify-center">
                                    <img src='/images/Badge.png' className=''></img>
                                </div>
                                <div className="hidden md:inline lg:hidden text-[#1F1F1F] align-middle tracking-[0.6px] flex flex-col py-[25.5px] font-['Gilroy-SemiBold'] font-[400] text-[18px] leading-[110.00000000000001%]">
                                    30-day hassle-free returns
                                    <span className='font-["Gilroy-Regular"] text-[18px] align-middle tracking-[0.6px]'>
                                        <pre>                     </pre>
                                    </span>
                                    If you're not totally in love with the product, we will refund you 100%.
                                </div>
                            </div>
                            <div className="flex flex-col justify-end md:flex-row lg:flex-col md:justify-between md:items-center lg:items-end lg:justify-end gap-[8px] shrink-0 w-full">
                                <div className='flex justify-end'> <span className='bg-[#4E2FD2] px-[8px] py-[5px] rounded-[3px]  text-[12px] leading-[100%] text-[#FFFFFF] tracking-[-5%] font-["Gilroy-Medium"]'>as low as $19.19/mo</span></div>
                               {selectors.length>0 && <div className="flex flex-row items-center gap-[8px] justify-end ">
                                    <span className="align-middle text-center text-[18px] leading-[20px] tracking-[0.25%] font-['Gilroy-Medium'] font-[400] text-[#6F7882] line-through">{`$${beforeDiscountCalc(selectors).toFixed(2)}`}</span>
                                    <span className="text-[24px] leading-[32px] tracking-[-0.13%] align-middle text-right font-[400] font-['Gilroy-Bold'] text-[#4E2FD2]">{`$${TotalPrice(selectors).toFixed(2)}`}</span>
                                </div>}
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <p className="text-[12px] flex flex-col gap-[4px] font-['Gilroy-SemiBold'] align-middle leading-[100%] tracking-[-0.06px] text-[#0AA288] pt-[10px] pb-[4px] text-center">
                                Congrats! You're saving $50.92 on your security bundle!
                            </p>
                            <button className="cursor-pointer bg-[#4E2FD2] py-[16px] px-[13px] rounded-[4px] text-[17px] font-['TT Norms Pro'] tracking-[0px] space-x-[9px] text-center align-middle leading-[100%] text-[#FFFFFF]">  Checkout
                            </button>

                        </div>
                    </div>
                    <div className='flex flex-col '>
                        <button onClick={() => saveMySystem()} className="cursor-pointer text-center text-[12px] md:text-[14px] text-[#484848] decoration-solid font-[400] underline font-['Gilroy-RegularItalic'] leading-[120%]  tracking-[-0.02px]">
                            Save my system for later
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewPanel;