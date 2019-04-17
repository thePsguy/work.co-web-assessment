import React from 'react'
import PropTypes from 'prop-types'
import cartSvg from '../cart.svg'
import { connect } from 'react-redux'
import { Dialog } from "@material-ui/core";

import './HeaderCart.css';

import { getTotal, getCartProducts } from '../reducers'
import CartContainer from "../containers/CartContainer";

  class HeaderCart extends React.Component {

  hasProducts = this.props.products.length > 0
  indicator = this.hasProducts ? (
    <em>({this.props.products.length})</em>
  ) : (
    <div>
    <em>Your cart is empty.</em>
    </div>
  )

  state = {
    cartVisible: true,
    mobileView: false,
  };

  componentDidMount() {
    this.setState({mobileView: (window.innerWidth <= 760)})
    window.addEventListener("resize", this.resize.bind(this))
    this.resize()
  }

  componentWillReceiveProps(nextProps, nextContext) {
    this.hasProducts = nextProps.products.length > 0
    this.indicator = this.hasProducts ? (
      <em>({nextProps.products.length})</em>
    ) : (
      <div>
        <em>Your cart is empty.</em>
      </div>
    )
  }

    resize() {
    const mobileView = (window.innerWidth <= 760)
    if (mobileView !== this.state.mobileView) {
      this.setState({mobileView})
    }
  }

  closeCart() {
    // debugger;
    this.setState({cartVisible: false});
  }

  render() {
    return (
      <div className={'headercart-container'} onClick={() => {
        this.setState({cartVisible: true})
      }}>
        <img src={cartSvg} style={{marginRight: 7}}/>
        {this.indicator}

        <Dialog
          open={this.state.cartVisible}
          fullScreen={this.state.mobileView}
          maxWidth={'md'}
          fullWidth={true}
          onEscapeKeyDown={() => {
            this.setState({cartVisible: false})
          }}
          onBackdropClick={() => {
            this.setState({cartVisible: false})
          }}
          onExit={() => {
            this.setState({cartVisible: false})
          }}
        >
          <CartContainer onCloseModal={this.closeCart.bind(this)}/>
        </Dialog>

      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  products: getCartProducts(state),
  total: getTotal(state)
})

HeaderCart.propTypes = {
  products: PropTypes.array,
  total: PropTypes.string,
  onCheckoutClicked: PropTypes.func
}

export default connect(mapStateToProps)(HeaderCart)
