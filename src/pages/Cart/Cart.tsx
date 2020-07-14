import React, { useState } from "react";
import { connect } from "react-redux";
import "./Cart.css";
import CartItem from "../../components/CartItem/CartItem";
import { CartItemType } from "../../types/cart-item.types";

function Cart({ orders }: any) {
  console.log(orders);
  const total: number = orders.reduce((a: any, b: any) => a + b.totalPrice, 0);
  return (
    <div className="cart">
      <h1>Cart</h1>
      <div className="table">
        <div className="table-headings">
          <div>Item</div>
          <div>Price</div>
          <div>Quantity</div>
          <div>Total Price</div>
          <div />
        </div>
        <div className="table-content">
          {orders.map((orderItem: CartItemType) => (
            <CartItem
              key={orderItem.id}
              id={orderItem.id}
              name={orderItem.name}
              price={orderItem.price}
              count={orderItem.count}
              totalPrice={orderItem.totalPrice}
            />
          ))}
        </div>
        <div className="total-bar">
          <h3>Total {total}</h3>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => ({
  orders: state,
});
export default connect(mapStateToProps)(Cart);
