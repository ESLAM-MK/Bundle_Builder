import { createSlice, current } from "@reduxjs/toolkit";
const getInitialState = () => { // get intial state
    const saved = localStorage.getItem("my_system")
    if (saved) {
        try {
            const parsed = JSON.parse(saved); // convert from json  to js
            return {
                selectors: parsed.selectors || [],
                activeVariants: parsed.activeVariants || {},
                openSteps: parsed.openSteps || [1],
                categories: parsed.categories || {}
            };
        } catch (e) {
            console.error("Error parsing localStorage state:", e)
        }
    }
    return {
        selectors: [],
        activeVariants: {},
        openSteps: [1],
        categories: {}
    };
};

export const bundleSlice = createSlice({
    name: "bundle",
    initialState: getInitialState(),
    reducers: {
        toggleStep: (state, action) => { // toggle current step
            state.openSteps.includes(action.payload) ? state.openSteps = state.openSteps.filter(s => s !== action.payload) : state.openSteps.push(action.payload)
        }
        , updateQuantity: (state, action) => { // handle any change of quantity either increment or decrement
            const { product, actionType } = action.payload
            let currentVariant = state.activeVariants[product.id] // intial value
            if (!currentVariant && product.hasVariants) {
                currentVariant = product.variants[0]
                state.activeVariants[product.id] = currentVariant
            } else if (!currentVariant && !product.hasVariants) {
                currentVariant = product
            }
            const index = state.selectors.findIndex((s) => {
                if (product.hasVariants) {
                    return s.variant?.id === currentVariant?.id
                }
                return s.product?.id === product.id;
            })
            let currentQuantity = index !== -1 ? state.selectors[index].quantity : 0
            let newQuantity = currentQuantity //  intial value
            if (actionType === "increment") {
                newQuantity = currentQuantity + 1
            } else {
                if (currentQuantity > 0) {
                    newQuantity = currentQuantity - 1
                } else {
                    newQuantity = currentQuantity
                }
            }
            if (index === -1) {
                if (newQuantity > 0) {
                    state.selectors.push({ product: product, variant: currentVariant, quantity: newQuantity }) //if newQuantity > 0 add newQuantity
                }
            } else {
                if (newQuantity === 0) {
                    state.selectors.splice(index, 1) // remove from selectors of quantity =0
                } else {
                    state.selectors[index].quantity = newQuantity // if newQuantity > 0 update quantity
                }
            }
            if (!state.categories[product.category]) {
                state.categories[product.category] = []
            }
            const hasRemainingQuantity = state.selectors.some(s => s.product.id === product.id && s.quantity > 0)
            if (!hasRemainingQuantity) {
                state.categories[product.category] = state.categories[product.category].filter(id => id !== product.id)
            } else {
                if (!state.categories[product.category].includes(product.id)) {
                    state.categories[product.category].push(product.id)
                }
            }

        },
        setActiveVariants: (state, action) => { // set current variant
            const { product, variant } = action.payload
            state.activeVariants[product.id] = variant
        },
        saveSystem: (state, action) => { // add current state to local storage
            localStorage.setItem("my_system", JSON.stringify(current(state))) 
        },
        nextStep: (state, action) => { // to close current step and open next step 
            const currentStep = action.payload
            const nextStepNumber = currentStep + 1
            state.openSteps = state.openSteps.filter((step) => step !== currentStep);
            if (!state.openSteps.includes(nextStepNumber)) {
                state.openSteps.push(nextStepNumber)

            }
        }
    }
})
export const { toggleStep, updateQuantity, setActiveVariants, saveSystem, nextStep } = bundleSlice.actions
export default bundleSlice.reducer;