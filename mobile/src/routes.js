import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'

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
      defaultNavigationOptions: ({ navigation }) => ({
        headerStyle: {
          backgroundColor: '#141419',
        },
        headerTintColor: '#FFF',
        headerLeft: (
          <TouchableOpacity
            onPress={() => navigation.navigate('Home')}
            activeOpacity={0.8}
          >
            <Image source={logo} style={{ marginLeft: 10 }} />
          </TouchableOpacity>
        ),
        headerRight: (
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
          </TouchableOpacity>
        ),
      }),
    }
  )
)

export default Routes
