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
        products.length > 0 ? <div>
          <hr />
          <p>Subtotal: &#36;{total}</p>
          <p>Taxes: &#36;{(total*0.08).toFixed(2)}</p>
          <hr />
          <p>Total: &#36;{(total*1.08).toFixed(2)}</p>
          <Button onClick={onCheckoutClicked}
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
