import React from 'react'
import PropTypes from 'prop-types'
import {PLACEHOLDER_IMAGE_URL} from "../constants/Placeholders";

const Product = ({ price, quantity, key, title }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ flex: 1 }}>
      <img src={PLACEHOLDER_IMAGE_URL} style={{
        height: '100%',
        width: '100%',
        objectFit: 'cover',
      }} />
    </div>
    <div style={{ flex: 2, padding: "5px 25px" }}>
      <span style={{ fontSize: '1.5em' }}>{title}</span>
      <br />
      <span style={{
        fontSize: '1.5em',
        fontWeight: 150,
        color: '#9d9d9d',
      }}>
        ${price}
      </span>
      <br />
      <span>Remove</span>
      {/*-{quantity}-*/}
    </div>
  </div>
)

Product.propTypes = {
  price: PropTypes.number,
  inventory: PropTypes.number,
  title: PropTypes.string,
  coverImage: PropTypes.string,
}

export default Product
