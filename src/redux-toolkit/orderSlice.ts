import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface OrdersState {
    list: Order[]
    currentOrder?: string
}
export interface Order {
    id: string, name: string, description: string
}

const initialState: OrdersState = {
    list: [],
    currentOrder: ''
}

export const orderSlice = createSlice({
    name: 'order',
    initialState,
    reducers: {

        setListOrders: (state, action: PayloadAction<Order[]>) => {
            state.list = action.payload
        },
        setCurrentOrder: (state, action: PayloadAction<string>) => {
            state.currentOrder = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setListOrders,setCurrentOrder } = orderSlice.actions

export default orderSlice.reducer