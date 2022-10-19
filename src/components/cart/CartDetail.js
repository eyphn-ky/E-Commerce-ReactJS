import React, { Component } from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as cartActions from "../../redux/actions/cartActions";
import { Table,Button } from "reactstrap";
import alertify from "alertifyjs";

 class CartDetail extends Component {
  removeFromCart(product){
    this.props.actions.removeFromCart(product);
    alertify.error(product.productName+" sepetten çıkarıldı");

  }
  render() {
    return (
      <div><h1>Sepet</h1>
      
      <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Unit Price</th>
              <th>Quantity Per Unit</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            
            {this.props.cart.map(cartItem=>(
                <tr key={cartItem.product.id}>
                <th scope="row">{cartItem.product.id}</th>
                <td>{cartItem.product.productName}</td>
                <td>{cartItem.product.unitPrice}</td>
                <td>{cartItem.quantity}</td>
                <td>
                  <Button color="danger" onClick={()=>this.removeFromCart(cartItem.product)}>Sepetten Sil</Button>
                </td>
                </tr>
            ))}

          </tbody>
        </Table>
      
      </div>
    )
  }
}
function mapDispatchToProps(dispatch) {
    //aksiyonları props'lara bağlar
    return {
      actions: {
        removeFromCart: bindActionCreators(cartActions.removeFromCart, dispatch),
      },
    };
  }
  
  function mapStateToProps(state) {
    //state'leri props'lara bağlar
    return {
      cart: state.cartReducer,
    };
  }
  export default connect(mapStateToProps, mapDispatchToProps)(CartDetail);
