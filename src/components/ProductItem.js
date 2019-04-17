import React from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import './ProductItem.css'
import { Button } from "react-bootstrap";
import {PLACEHOLDER_IMAGE_URL} from "../constants/Placeholders";

const ProductItem = ({ product, onAddToCartClicked }) => (
  <div className={'rootContainer'}>
    <div className={'productImageContainer'}>
      <img src={PLACEHOLDER_IMAGE_URL} className={'productImage'} alt={"Product Image"} />
    </div>
    {/*<Product*/}
    {/*  title={product.title}*/}
    {/*  price={product.price}*/}
    {/*  inventory={product.inventory} />*/}
    <div className={'contentContainer'}>

      <div className={'productDetails'}>
        <div className={'productInventory'}>
          <div className={'productTitle'}>{product.title}</div>
          <div className={'productCount'}>{product.inventory > 0 ? product.inventory + " Remaining" : "Sold Out"}</div>
        </div>
        <div className={'productPrice'}>${product.price}</div>
      </div>

      <Button
        className={product.inventory === 0 ? 'disabledButton' : 'standardButton'}
        onClick={onAddToCartClicked}
        disabled={product.inventory > 0 ? '' : 'disabled'}>
        {/*{product.inventory > 0 ? */}
          Add to cart
          {/*: 'Sold Out'}*/}
      </Button>
    </div>
  </div>
)

ProductItem.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    inventory: PropTypes.number.isRequired
  }).isRequired,
  onAddToCartClicked: PropTypes.func.isRequired
}

export default ProductItem
