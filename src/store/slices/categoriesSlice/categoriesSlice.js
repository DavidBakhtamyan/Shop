import { createSlice } from "@reduxjs/toolkit";
import { fetchCategories } from "./categoriesAPI";

const categoriesSlice = createSlice({
    name: 'categories',
    initialState: [],
    reducers:{
        toggleActiveCategory(state, { payload }){
            return[
                ...state.map(category => {
                    if(category.id !== payload) return category
                    return {
                        ...category,
                        isActive: !category.isActive
                    }
                })
            ]
        }
    },
    extraReducers:{
        [fetchCategories.fulfilled]:(state, { payload }) =>{
            return [
                ...state,
                ...payload
            ]
        }

    }
})

export const selectCategories =  state => state.categories

export const {toggleActiveCategory} = categoriesSlice.actions

export const categoriesReducer = categoriesSlice.reducer