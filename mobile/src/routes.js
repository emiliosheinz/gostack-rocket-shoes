import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Image } from 'react-native'

import Icon from 'react-native-vector-icons/MaterialIcons'
import logo from './assets/images/logo.png'

import Home from './pages/Home'
import Cart from './pages/Cart'

const Routes = createAppContainer(
  createStackNavigator(
    {
      Home,
      Cart,
    },
    {
      headerLayoutPreset: 'left',
      headerBackTitleVisible: false,
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#FFF',
        headerLeft: <Image source={logo} style={{ marginLeft: 10 }} />,
        headerRight: <Icon name='shopping-cart' size={24} color='#FFF' style={{ marginRight: 10 }} />
      },
    }
  )
)

export default Routes
