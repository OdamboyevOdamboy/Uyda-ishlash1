import { createSlice } from "@reduxjs/toolkit"


const productSlice = createSlice({
    name: "product",
    initialState: {
        count: 0,
        totalPrice: 0
    },
    reducers: {
        addToCard: (state) => {
            state.count += 1;
        }
    }

})

export const { addToCard } = productSlice.actions;
export default productSlice.reducer;