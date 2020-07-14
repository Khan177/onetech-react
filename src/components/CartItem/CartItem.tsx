import React, { useState } from "react";

import { IconButton, TextField } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

import {
  removeOrderItem,
  changeOrderItemQuantity,
} from "../../store/actions/actions";
import { connect } from "react-redux";

const CartItem = (props: any) => {
  const deleteItem = () => {
    props.dispatch(removeOrderItem(props.id));
  };
  return (
    <div className="table-headings">
      <div>{props.name}</div>
      <div>{props.price}</div>
      <div>
        <TextField
          id="standard-number"
          label="Количество"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          value={props.count}
          onChange={(e) => {
            props.dispatch(
              changeOrderItemQuantity(props.id, Number(e.target.value))
            );
          }}
        />
      </div>
      <div>{props.totalPrice}</div>
      <div>
        <IconButton color="secondary" aria-label="delete" onClick={deleteItem}>
          <Delete />
        </IconButton>
      </div>
    </div>
  );
};
export default connect()(CartItem);
