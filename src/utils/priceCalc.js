export  const calculatePrice = (compareAtPrice , discountPercentage)=>{
return discountPercentage ? Math.round((compareAtPrice - discountPercentage / 100 * compareAtPrice) * 100) / 100 : compareAtPrice
}
export const TotalPrice =(selectors)=>{
   
    return selectors.reduce((acc , current)=>{
       return acc + (calculatePrice(current.product.compareAtPrice , current.product.discountPercentage)* current.quantity )
    },0)
   
}
export const beforeDiscountCalc= (selectors)=>{
    return selectors.reduce((acc , current)=>{
       return acc + (current.product.compareAtPrice* current.quantity )
    },0)
}
