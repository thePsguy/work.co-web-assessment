import React from 'react'
import PropTypes from 'prop-types'
import {PLACEHOLDER_IMAGE_URL} from "../constants/Placeholders";
import { Remove, Add } from "@material-ui/icons";

const Product = ({ price, quantity, key, title }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex' }}>
      <div style={{ flex: 1 }}>
        <img src={PLACEHOLDER_IMAGE_URL} style={{
          height: '100%',
          width: '100%',
          objectFit: 'cover',
        }} />
      </div>
      <div style={{ flex: 2, padding: "5px 25px", display: 'flex', flexDirection: 'column' }}>
        <span style={{ fontSize: '1.5em' }}>{title}</span>
        <span style={{
          fontSize: '1.5em',
          fontWeight: 100,
          color: '#9d9d9d',
          flex: 1,
        }}>
          ${price}
        </span>
        <span style={{
          color: '#cc1d39',
          cursor: 'pointer'
        }}>Remove</span>
        {/*-{quantity}-*/}
      </div>
    </div>
    <div style={{ margin: '20px 0', height: 40, display: 'flex' }}>
      <div style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#f2f4f7',
        borderRadius: "100px 0 0 100px",
        cursor: 'pointer',
      }}>
        <Remove style={{ color: "#8E939C", margin: "auto 0", flex: 1 }} />
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#fff',
        border: "1px solid #F2F4F7",
      }}>
        <span style={{margin: "auto 0", flex: 1, textAlign: 'center'}}>
          {quantity}
        </span>
      </div>
      <div style={{
        display: 'flex',
        flex: 1,
        backgroundColor: '#f2f4f7',
        borderRadius: "0 100px 100px 0",
        cursor: 'pointer',
      }}>
        <Add style={{ color: "#8E939C", margin: "auto 0", flex: 1 }} />
      </div>
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
