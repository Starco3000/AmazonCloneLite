// Here we define all the application level and define actions to make the changes to the state
export const initialState = {
  cart: [],
  user: null,
};

// Selector

export const getCartTotal = (cart) => {
  return cart?.reduce((amount, item) => item.price + amount, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'ADD_TO_CART':
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
    case 'REMOVE_FROM_CART':
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      let newCart = [...state.cart];

      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(`Can't remove product (id: ${action.id}) as it's not in the cart!`);
      }

      return {
        ...state,
        cart: newCart,
      };

    default:
      return state;
  }
};

export default reducer;
