import { createSlice } from "@reduxjs/toolkit";
import { fetchProducts } from "./productsAPI";

const productSlice = createSlice({
    name: 'products',
    initialState: {
        productsData: [],
        currentProduct: null
    },
    reducers:{
        toggleCurrentProduct(state, { payload }){
            state.currentProduct = state.productsData.find(product => product.id === payload)
        }
    },
    extraReducers:{
        [fetchProducts.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                productsData: [...payload]
            }
        }
    }
})

export const selectProducts = state => state.products

export const {toggleCurrentProduct} = productSlice.actions

export const productsReduser = productSlice.reducer
