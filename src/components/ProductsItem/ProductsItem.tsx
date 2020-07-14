import React from "react";
import { connect } from "react-redux";

import "./ProductsItem.css";
import { Button } from "@material-ui/core";
import { ProductsItemType } from "../../types/products-item.types";
import { addOrderItem } from "../../store/actions/actions";
import { useDispatch } from "react-redux";

function ProductsItem(props: any) {
  const addCardToOrder = (): void => {
    props.dispatch(
      addOrderItem({
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image,
      })
    );
  };
  return (
    <div className="products-item">
      <div className="card-image">
        <img src={props.image} alt="" />
      </div>
      <h2>{props.name}</h2>
      <p>Price {props.price} USD</p>
      <Button variant="contained" color="primary" onClick={addCardToOrder}>
        Add to a card
      </Button>
    </div>
  );
}
export default connect()(ProductsItem);
