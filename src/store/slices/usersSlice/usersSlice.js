import { createSlice } from "@reduxjs/toolkit";
import { fetchUsers } from "./usersAPI";

const userSlice = createSlice({
    name: 'users',
    initialState: {
        usersData: [],
        currentUser: null
    },
    reducers: {
        toggleCurrentUser(state, { payload }) {
            return {
                ...state,
                currentUser: state.usersData.find(user => user.email === payload.email && user.password === payload.password)
            }
        },
        registration(state, { payload }) {
            return {
                ...state,
                usersData: [

                    {
                        id: new Date().getTime(),
                        ...payload
                    },
                    ...state.usersData
                ]
            }
        },
        addToCart(state, { payload }) {
            let idx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            if (state.currentUser.cart.some(el => el.id === payload.id)) {
                let productIdx = state.currentUser.cart.findIndex(el => el.id === payload.id)
                state.currentUser.cart[productIdx].price += state.currentUser.cart[productIdx].price / state.currentUser.cart[productIdx].count
                state.usersData[idx].cart[productIdx].price += state.usersData[idx].cart[productIdx].price / state.usersData[idx].cart[productIdx].count
                state.currentUser.cart[productIdx].count++
                state.usersData[idx].cart[productIdx].count++
            }
            else {
                let obj = {
                    ...payload,
                    count: 1
                }
                state.currentUser.cart.push(obj)
                state.usersData[idx].cart.push(obj)
            };
        },
        removeFromCart(state, { payload }) {
            let idx = state.usersData.findIndex(user => user.id === state.currentUser.id)

            state.currentUser.cart = [...state.currentUser.cart.filter(product => product.id !== payload)]
            state.usersData[idx].cart = [...state.usersData[idx].cart.filter(product => product.id !== payload)]
        },
        incCartItemCount(state, { payload }) {
            let idx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            let productIdx = state.currentUser.cart.findIndex(el => el.id === payload)

            state.currentUser.cart[productIdx].price += state.currentUser.cart[productIdx].price / state.currentUser.cart[productIdx].count
            state.usersData[idx].cart[productIdx].price += state.usersData[idx].cart[productIdx].price / state.usersData[idx].cart[productIdx].count
            state.currentUser.cart[productIdx].count++
            state.usersData[idx].cart[productIdx].count++
        },
        decCartItemCount(state, { payload }) {

            let idx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            let productIdx = state.currentUser.cart.findIndex(el => el.id === payload)
            if (state.currentUser.cart.find(el => el.id === payload).count > 1) {
                state.currentUser.cart[productIdx].price -= state.currentUser.cart[productIdx].price / state.currentUser.cart[productIdx].count
                state.usersData[idx].cart[productIdx].price -= state.usersData[idx].cart[productIdx].price / state.usersData[idx].cart[productIdx].count
                state.currentUser.cart[productIdx].count--
                state.usersData[idx].cart[productIdx].count--
            }
        },
        addToWishList(state, { payload }) {
            let idx = state.usersData.findIndex(user => user.id === state.currentUser.id)
            if (state.currentUser.wishList.some(product => product.id === payload.id)) {
            }
            else {
                state.currentUser.wishList.push(payload)
                state.usersData[idx].wishList.push(payload)
            }

        },
        removeWishList(state, { payload }) {
            state.currentUser.wishList = [
                ...state.currentUser.wishList.filter(el => el.id !== payload)
            ]
        },
        logOut(state){
            state.currentUser = null
        }
    },
    extraReducers: {
        [fetchUsers.fulfilled]: (state, { payload }) => {
            return {
                ...state,
                usersData: [...payload]
            }
        }
    }
})

export const selectUsers = state => state.users

export const { toggleCurrentUser, registration, addToCart, removeFromCart, incCartItemCount, decCartItemCount, removeWishList, addToWishList, logOut } = userSlice.actions

export const usersReduser = userSlice.reducer
