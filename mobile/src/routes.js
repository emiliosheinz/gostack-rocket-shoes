import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'
import { Image, TouchableOpacity } from 'react-native'

import logo from './assets/images/logo.png'

import HeaderRight from './components/HeaderRight'

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
        headerRight: <HeaderRight navigation={navigation} />,
      }),
    }
  )
)

export default Routes
