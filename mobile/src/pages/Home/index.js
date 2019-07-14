import React, { Component } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

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

export default class Home extends Component {
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

  render() {
    const { products } = this.state

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
              <AddToCartButton>
                <CartIconContainer>
                  <Icon name='add-shopping-cart' size={20} color='#fff' />
                  <Amount>3</Amount>
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
