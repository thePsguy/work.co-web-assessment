import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import {Button} from "react-bootstrap"
import cartSvg from '../cart.svg'
import { Clear } from "@material-ui/icons"

const Cart  = ({ products, total, onCheckoutClicked, onCloseModal }) => {
  // setTimeout(onCloseModal(), 5000);
  const hasProducts = products.length > 0
  const nodes = hasProducts ? (
    products.map(product =>
      <Product
        title={product.title}
        price={product.price}
        quantity={product.quantity}
        key={product.id}
      />
    )
  ) : (
    <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      textAlign: 'center',
      marginTop: '30%',
      color: '#9B9B9B',
    }}
    >
      <img
        style={{
          width: 100,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
        src={cartSvg} />
    <em>Please add some products to your cart.</em>
    </div>
  )

  return (
    <div style={{ width: '100%', padding: '5%', height: '70vh' }}>
      <div style={{display: 'flex'}}>
        <h3 style={{ flex: 1 }}>Your Cart</h3>
        <Clear style={{
          cursor: 'pointer',
          fontSize: '3em',
          color: '#9B9B9B',
          margin: "-30px -30px 0 0",
        }}
        onClick={onCloseModal} />
      </div>
      <hr />
      {nodes}
      {
        products.length > 0 ?
        <div>
          <hr />
          <div style={{display: 'flex'}}>
            <p style={{ flex: 1 }}>Subtotal:</p>
            <p style={{ fontWeight: 100, color: '#9d9d9d' }}>&#36;{total}</p>
          </div>
          <div style={{display: 'flex'}}>
            <p style={{ flex: 1 }}>Taxes:</p>
            <p style={{ fontWeight: 100, color: '#9d9d9d' }}>&#36;{(total*0.08).toFixed(2)}</p>
          </div>
          <hr />
          <div style={{display: 'flex'}}>
            <p style={{ flex: 1 }}>Total:</p>
            <p style={{ fontWeight: 100, color: '#9d9d9d' }}>&#36;{(total*1.08).toFixed(2)}</p>
          </div>
          <Button
            style={{
              backgroundColor: '#9d9d9d',
              borderColor: '#9d9d9d',
              width: '100%',
              borderRadius: 0,
            }}
            // onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Update
          </Button>
          <br />
          <Button
            style={{
              backgroundColor: '#5e97d1',
              borderColor: '#5e97d1',
              width: '100%',
              position: 'absolute',
              marginLeft: '-5%',
              borderRadius: 0,
              marginTop: 47,
            }}
            onClick={onCheckoutClicked}
            disabled={hasProducts ? '' : 'disabled'}>
            Checkout
          </Button>
        </div> : null
      }
    </div>
  )
}

Cart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func,
  onCloseModal: PropTypes.func,
}

export default Cart
