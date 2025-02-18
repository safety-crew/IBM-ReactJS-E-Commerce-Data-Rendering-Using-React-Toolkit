import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart(state, action) {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quanitity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quanitity: 1 });
      }
    },
    removeItemFromCart(state, action) {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },
    clearCart(state) {
      state.cartItems = [];
    },
    increaseItemQuantity(state, action) {
      const itemToIncrease = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToIncrease) {
        itemToIncrease.quanitity += 1;
      }
    },
    decreaseItemQuantity(state, action) {
      const itemToDecrease = state.cartItems.find(
        (item) => item.id === item.payload
      );
      if (itemToDecrease && itemToDecrease.quanitity > 1) {
        itemToDecrease.quanitity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  removeItemFromCart,
  clearCart,
  increaseItemQuantity,
  decreaseItemQuantity,
} = CartSlice.actions;

export default CartSlice.actions;
