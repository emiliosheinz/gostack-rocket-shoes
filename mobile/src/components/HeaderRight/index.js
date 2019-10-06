import React from 'react'
import { connect } from 'react-redux'
import { TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'

import { CartSize } from './styles'

function HeaderRight({ navigation, cartSize }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Cart')}
      activeOpacity={0.8}
    >
      <Icon
        name='shopping-cart'
        size={25}
        color='#FFF'
        style={{ marginRight: 10 }}
      />
      <CartSize>{cartSize || 0}</CartSize>
    </TouchableOpacity>
  )
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(HeaderRight)
