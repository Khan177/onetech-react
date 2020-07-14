const orders = (state: any = [], action: any) => {
  switch (action.type) {
    case "ADD_ORDER_ITEM":
      let isContains = false;
      state.map((orderItem: any) => {
        if (orderItem.id === action.id) {
          isContains = true;
          ++orderItem.count;
          orderItem.totalPrice += orderItem.price;
          console.log(orderItem.count);
        }
      });
      console.log(isContains);
      return !isContains
        ? [
            ...state,
            {
              id: action.id,
              name: action.name,
              price: action.price,
              count: 1,
              totalPrice: action.price,
            },
          ]
        : [...state];
    case "REMOVE_ORDER_ITEM":
      return state.filter((orderItem: any) => orderItem.id !== action.id);
    case "CHANGE_ORDER_ITEM_QUANTITY":
      console.log(action.count);
      return action.count > 0
        ? state.map((orderItem: any) =>
            orderItem.id === action.id
              ? {
                  ...orderItem,
                  count: action.count,
                  totalPrice: orderItem.price * action.count,
                }
              : orderItem
          )
        : action.count < 0
        ? [...state]
        : state.filter((orderItem: any) => orderItem.id !== action.id);
    default:
      return state;
  }
};

export default orders;
