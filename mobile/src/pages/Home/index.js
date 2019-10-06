import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/MaterialIcons'

import * as CartActions from '../../store/modules/cart/actions'

import api from '../../services/api'

import { formatPrice } from '../../util/format'

import {
  Container,
  AvailableItems,
  Item,
  ItemImage,
  ItemTitle,
  ItemPrice,
  ButtonText,
  AddToCartButton,
  CartIconContainer,
  Amount,
} from './styles'

class Home extends Component {
  state = {
    products: [],
  }

  async componentDidMount() {
    const response = await api.get('products')

    const products = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }))

    this.setState({ products })
  }

  handleAddToCartClick = (id) => {
    const { addToCartRequest } = this.props

    addToCartRequest(id)
  }

  render() {
    const { products } = this.state
    const { amount } = this.props

    return (
      <Container>
        <AvailableItems
          horizontal
          data={products}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => (
            <Item>
              <ItemImage
                source={{
                  uri:
                    item.image,
                }}
              />
              <ItemTitle>{item.title}</ItemTitle>
              <ItemPrice>{item.priceFormatted}</ItemPrice>
              <AddToCartButton onPress={() => this.handleAddToCartClick(item.id)}>
                <CartIconContainer>
                  <Icon name='add-shopping-cart' size={20} color='#fff' />
                  <Amount>{amount[item.id] || 0}</Amount>
                </CartIconContainer>
                <ButtonText>Adicionar</ButtonText>
              </AddToCartButton>
            </Item>
          )}
        />
      </Container>
    )
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount
    return amount
  }, {}),
})

const mapDispatchToProps = dispatch => bindActionCreators(CartActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
