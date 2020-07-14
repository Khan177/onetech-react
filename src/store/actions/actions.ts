export const addOrderItem = (orderItem: any) => ({
  type: "ADD_ORDER_ITEM",
  id: orderItem.id,
  name: orderItem.name,
  price: orderItem.price,
  image: orderItem.image,
});

export const removeOrderItem = (id: number) => ({
  type: "REMOVE_ORDER_ITEM",
  id: id,
});

export const changeOrderItemQuantity = (id: number, count: number) => ({
  type: "CHANGE_ORDER_ITEM_QUANTITY",
  id: id,
  count: count,
});
